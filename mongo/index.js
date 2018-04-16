'use strict';

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/babble';

mongo.connect(url, function(err, db) {
  console.log('Connected successfully to server');

  var collection = db.collection('messages');
  collection.insertMany([
    {text: 'good morning', user: 'serge'},
    {text: 'what\'s up', user: 'shuki'}
  ], function (err, result) {
    console.log('Inserted ' + result.result.n + ' records');
    collection.find({user: 'me'}).toArray(function (err, result) {
      console.log(result);
      db.close();
    });
  });
});
