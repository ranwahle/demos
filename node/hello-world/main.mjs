import http from 'http';

let server = http.createServer(onRequest);
server.listen(80);

function onRequest(request, response) {
  response.end('Hello World');
}