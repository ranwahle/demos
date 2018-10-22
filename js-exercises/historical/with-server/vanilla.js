let http = require('http');
let url = require('url');
let qs = require('querystring');
let fs = require('fs');
let util = require('util');

let server = http.createServer(onRequest);
server.listen(8000);

function onRequest(request, response) {
  let urlObj = url.parse(request.url);

  // GET /ancestry
  // GET /ancestry/:id
  if (urlObj.pathname.includes('/ancestry')) {
    getData(urlObj.pathname)
      .then(data => handleFile(request, response, data))
      .catch(err => handleFileError(request, response, err));
    return;
  }

  // GET /client (static)
  getFile(urlObj.pathname)
    .then(data => handleFile(request, response, data))
    .catch(err => handleFileError(request, response, err));
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

function getData(pathName) {
  return util.promisify(fs.readFile)(`./data${pathName}.json`);
}

function getFile(pathName) {
  return util.promisify(fs.readFile)(`./client${pathName}`);
}

function sendStatus(request, response, statusCode) {
  response.writeHead(statusCode, {'Content-Type': 'text/plain'});
  response.end(http.STATUS_CODES[statusCode]);
}