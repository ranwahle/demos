let http = require('http');
let url = require('url');
let qs = require('querystring');
let fs = require('fs');
let moment = require('moment');

let server = http.createServer(onRequest);
server.listen(8000);

function onRequest(request, response) {
  let urlObj = url.parse(request.url);

  if (urlObj.pathname === '/api/moment') {
    let params = qs.parse(urlObj.query);
    handleMoment(request, response, params);
    return;
  }

  getFile(
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

function handleMoment(request, response, {format}) {
  if (!format) {
    sendStatus(request, response, 400);
    return;
  }
  let responseTime = moment().format(format);
  response.end(responseTime);
}

function getFile(pathName, resolve, reject) {
  if (pathName === '/') {
    pathName = 'index.html';
  }
  fs.readFile(`./client/${pathName}`, (err, data) => {
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