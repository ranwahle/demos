'use strict';

let http = require('http');
let data = require('./data.json');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data));
}).listen(8080);