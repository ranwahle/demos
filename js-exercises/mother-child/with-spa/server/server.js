let express = require('express');
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let ancestry = require('./ancestry');
let auth = require('./auth');
let app = express();

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(`Error connecting to db [err=${err}]`);
    return;
  }

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  auth.init(app, client);
  ancestry.init(app, client);

  app.use(express.static('client'));

  app.listen(8000);
});