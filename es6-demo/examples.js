// Var
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Const
const MAX_NUM = 5;
MAX_NUM = 6;

// Const Object
const person = {name: 'Shalev'};
person.name = 'Mira';
console.log(person);
person = {name: 'Kinneret'};

// Users
// https://jsonplaceholder.typicode.com/users
// Declarative
let users = require('./users.json');
users
  .map(({name, username}) => `name: ${name}, username: ${username}`)
  .forEach(str => console.log(str));

// Imperative
let users = require('./users.json');
for (let user of users) {
  console.log(`name: ${user.name}, username: ${user.username}`);
}

// Old method
let users = require('./users.json');
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  console.log('name:' + user.name + ', username: ' + user.username);
}