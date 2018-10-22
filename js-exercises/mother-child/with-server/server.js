let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(onRequest);
server.listen(8000);

function onRequest(request, response) {
  let urlObj = url.parse(request.url);

  if (urlObj.pathname === '/ancestry') {
    handleFile(request, response, 'data', 'ancestry.json');
    return;
  }

  handleFile(request, response, 'client', urlObj.pathname);
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