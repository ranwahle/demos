let http = require('http');

let server = http.createServer(onRequest);
server.listen(8000);

function onRequest(request, response) {
  let responseTime = new Date();
  response.end(`
    Request ${request.url} served at ${responseTime.toLocaleString()}
  `);
}