let express = require('express');
let app = express();
let mongo = require('mongodb').MongoClient;

app.use(express.static('client'));

app.get('/ancestry', (req, res, next) => {
  res.sendFile(`${__dirname}/data/ancestry.json`);
});
app.get('/ancestry/:id', (req, res, next) => {
  res.sendFile(`${__dirname}/data/ancestry/${req.params.id}.json`);
});

app.listen(8000, () => {
  console.log('listening on 8000...');

  mongo.connect('mongodb://localhost:27017', (err, client) => {
    console.log('Connected successfully to database');

    let db = client.db('course');
    let collection = db.collection('ancestry');
    collection.insertMany([{name: 'Avishag Krul'}, {name: 'Shalev Krul'}, {name: 'Mira Krul'}, {name: 'Kinneret Krul'}], (err, result) => {
      console.log(`Inserted ${result.result.n} records`);
      collection.find({name: 'Serge Krul'}).toArray((err, result) => {
        console.log(result);
        client.close();
      });
    });
  });
});
