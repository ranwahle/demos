// https://jsonplaceholder.typicode.com/users
import users from './users.mjs';

// Declarative
users
  .map(({name, username}) => `name: ${name}, username: ${username}`)
  .forEach(str => console.log(str));

// Imperative
for (let user of users) {
  console.log(`name: ${user.name}, username: ${user.username}`);
}

// Old method
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  console.log('name:' + user.name + ', username: ' + user.username);
}