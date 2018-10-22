let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(onRequest);
server.listen(8000);

function onRequest(request, response) {
  let urlObj = url.parse(request.url);

  if (urlObj.pathname === '/ancestry') {
    getFile(
      'data',
      'ancestry.json',
      data => handleFile(request, response, data),
      err => {
        console.error(err);
        sendStatus(request, response, 500)
      }
    );
    return;
  }

  getFile(
    'client',
    urlObj.pathname,
    data => handleFile(request, response, data),
    err => handleFileError(request, response, err)
  );
}

function handleFile(request, response, data) {
  response.end(data);
}

function handleFileError(request, response, err) {
  if (err.code === 'ENOENT') {
    sendStatus(request, response, 404);
    return;
  }
  sendStatus(request, response, 500);
}

function getFile(folder,pathName, resolve, reject) {
  if (pathName === '/') {
    pathName = 'index.html';
  }
  fs.readFile(`./${folder}/${pathName}`, (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
}

function sendStatus(request, response, statusCode) {
  response.writeHead(statusCode, {'Content-Type': 'text/plain'});
  response.end(http.STATUS_CODES[statusCode]);
}