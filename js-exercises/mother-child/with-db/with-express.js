let express = require('express');
let mongo = require('mongodb');

let ancestry, app;

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(`Error connecting to db [err=${err}]`);
    return;
  }
  ancestry = client.db('course').collection('ancestry');

  app = express();
  app.use(express.static('client'));
  app.use((request, response, next) => {
    request.startTime = Date.now();
    next();
  });
  app.get('/ancestry', (request, response, next) => {
    handleAncestry(request, response);
    next();
  });
  app.get('/ancestry/:id', (request, response, next) => {
    if (!mongo.ObjectId.isValid(request.params.id)) {
      response.sendStatus(400);
      return next();
    }
    handlePerson(request, response, request.params.id);
    next();
  });
  app.use((request, response) => {
    console.log(`${request.url}: ${Date.now() - request.startTime}`);
  });
  app.listen(8000);
});


function handlePerson(request, response, id) {
  ancestry.find({_id: mongo.ObjectId(id)}).toArray((err, result) => {
    if (err) {
      response.sendStatus(500);
      return;
    }
    response.json(result[0] || null);
  });
}

function handleAncestry(request, response) {
  ancestry.find({}).project({_id: true}).toArray((err, result) => {
    if (err) {
      response.sendStatus(500);
      return;
    }
    response.json(result);
  });
}