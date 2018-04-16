let fs = require('fs');
let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
  console.log('Connected successfully to database');

  let db = client.db('course');
  let collection = db.collection('ancestry');

  fs.readFile('./data/migration.json', (err, data) => {
    let ancestry = JSON.parse(data).ANCESTRY_FILE;
    collection.insertMany(ancestry, (err, result) => {
      console.log(`Inserted ${result.result.n} records`);
      client.close();
    });
  });
});