let mongo = require('mongodb');
let ancestry;

module.exports = {
  init
};

function init(app, client) {

  ancestry = client.db('course').collection('ancestry');

  app.get('/ancestry', (req, res) => {
    handleAncestry(req, res);
  });
  app.post('/ancestry', (req, res) => {
    handleInsert(req, res, req.body);
  });
  app.get('/ancestry/:id', (req, res) => {
    if (!mongo.ObjectId.isValid(req.params.id)) {
      res.sendStatus(400);
      return;
    }
    handlePerson(req, res, req.params.id);
  });
  app.delete('/ancestry/:id', (req, res) => {
    if (!mongo.ObjectId.isValid(req.params.id)) {
      res.sendStatus(400);
      return;
    }
    handleDelete(req, res, req.params.id);
  });
}

function handleDelete(req, res, id) {
  ancestry.deleteOne({_id: mongo.ObjectId(id)}, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json({count: result.deletedCount});
  });
}

function handleInsert(req, res, personData) {
  ancestry.insertOne(personData, (err, res) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json({_id: res.insertedId});
  })
}

function handlePerson(req, res, id) {
  ancestry.find({_id: mongo.ObjectId(id)}).toArray((err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json(result[0] || null);
  });
}

function handleAncestry(req, res) {
  ancestry.find({}).project({_id: true}).toArray((err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json(result);
  });
}