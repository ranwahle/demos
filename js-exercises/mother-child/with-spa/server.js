let http = require('http');
let url = require('url');
let fs = require('fs');
let mongo = require('mongodb');

let ancestry;

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(`Error connecting to db [err=${err}]`);
    return;
  }
  ancestry = client.db('course').collection('ancestry');

  let server = http.createServer(onRequest);
  server.listen(8000);
});

function onRequest(request, response) {
  let urlObj = url.parse(request.url);

  if (urlObj.pathname === '/ancestry') {
    handleAncestry(request, response);
    return;
  }

  if (urlObj.pathname.includes('/ancestry/')) {
    let id = urlObj.pathname.split('/')[2];
    if (id === '') {
      handleAncestry(request, response);
      return;
    }
    if (!mongo.ObjectId.isValid(id)) {
      sendStatus(request, response, 400);
      return;
    }
    handlePerson(request, response, id);
    return;
  }

  handleFile(request, response, 'client', urlObj.pathname);
}

function handlePerson(request, response, id) {
  ancestry.find({_id: mongo.ObjectId(id)}).toArray((err, result) => {
    if (err) {
      sendStatus(request, response, 500);
      return;
    }
    sendJson(request, response, result[0]);
  });
}

function handleAncestry(request, response) {
  ancestry.find({}).project({_id: true}).toArray((err, result) => {
    if (err) {
      sendStatus(request, response, 500);
      return;
    }
    sendJson(request, response, result);
  });
}

function handleFile(request, response, folder, pathName) {
  if (pathName === '/') {
    pathName = 'index.html';
  }
  fs.readFile(`./${folder}/${pathName}`, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        sendStatus(request, response, 404);
        return;
      }
      sendStatus(request, response, 500);
      return;
    }
    sendFile(request, response, data);
  });
}

function sendFile(request, response, data) {
  response.end(data);
}

function sendStatus(request, response, statusCode) {
  response.writeHead(statusCode, {'Content-Type': 'text/plain'});
  response.end(http.STATUS_CODES[statusCode]);
}

function sendJson(request, response, data) {
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(data));
}