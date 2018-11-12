let fs = require('fs');
let mongo = require('mongodb');

let ancestry;

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(`Error connecting to db [err=${err}]`);
    return;
  }
  ancestry = client.db('course').collection('ancestry');

  ancestry.deleteMany({}, (err, result) => {
    if (err) {
      endWith('error', err, client);
      return;
    }

    console.log(`Deleted such ${result.deletedCount} people...`);

    fs.readFile('./data/ancestry.json', (err, data) => {
      if (err) {
        endWith('error', err, client);
        return;
      }
      ancestry.insertMany(JSON.parse(String(data)), (err, result) => {
        if (err) {
          endWith('error', err, client);
          return;
        }
        endWith('log', `Great success! [inserted=${result.insertedCount}]`, client);
      });
    });
  });
});

function endWith(method, message, client) {
  console[method](message);
  client.close();
}