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

// Destructuring and default
function getUserEmailLink({name, email} = {name: 'John Doe', email: 'jdoe@email.com'}) {
  return `<a href="mailto:${email}">${name}</a>`;
}
console.log(getUserEmailLink());
console.log(getUserEmailLink({name: 'Serge Krul', email: 'skrul@email.com'}));

// Rest
function multiply(by, ...rest) {
  return rest.map(n => n * by);
}

console.log(multiply(2, 1, 2, 3));

// Spread Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// Spread Objects
let personalDetails = {name: 'Serge', age: 37};
let address = {city: 'Hararit', code: '20182'};
console.log({...personalDetails, ...address});