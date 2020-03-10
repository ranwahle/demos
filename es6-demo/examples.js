// Var async problem
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Fixing with new function scope
for (var i = 0; i < 5; i++) {
  printNumber(i, 1000);
}

function printNumber(n, delay) {
  setTimeout(function() {
    console.log(n);
  }, delay);
}

// Fixing with let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Scope with var
function doSomething() {

  let n;
  // ...
  console.log(n);

  if (true) {
    n = 5;
  }
}
doSomething();

// Scope with let
function doSomething() {
  // ...
  console.log(n);

  if (true) {
    var n = 5;
  }
}
doSomething();

// Const
const MAX_NUM = 5;
MAX_NUM = 6;

// Const Object
const person = {name: 'Shalev'};
person.name = 'Mira';
console.log(person);
person = {name: 'Kinneret'};

const numbers = [1, 2, 3];
numbers[1] = 5;






// Destructuring and default
function getUserEmailLink({name, email} = {name: 'John Doe', email: 'jdoe@email.com'}) {
  return `<a href="mailto:${email}">${name}</a>`;
}

// ES5
function getUserEmailLink(user) {
  if (!user) {
    user = {name: 'John Doe', email: 'jdoe@email.com'};
  }
  return '<a href="mailto:' + user.email + '">' + user.name + '</a>';
}


/*
  Implement a function getUserEmailLink()
  that will behave as follows:
*/

console.log(getUserEmailLink());
// output: <a href="mailto:jdoe@email.com">John Doe</a>

console.log(getUserEmailLink({
  name: 'Serge Krul',
  email: 'skrul@email.com'
}));
// output: <a href="mailto:skrul@email.com">Serge Krul</a>

// V1
function getUserEmailLink({name, email} = {name: 'John Doe', email: 'jdoe@email.com'}) {
  return `<a href="${email}">${name}</a>`;
}

// V2
function getUserEmailLink(user) {
  let {name, email} = user || {name: 'John Doe', email: 'jdoe@email.com'};
  return `<a href="${email}">${name}</a>`;
}

// V3
function getUserEmailLink(user) {
  if (!user) {
    user = {name: 'John Doe', email: 'jdoe@email.com'};
  }
  return `<a href="${user.email}">${user.name}</a>`;
}

// Rest
function multiply(by, ...rest) {
  return rest.map(n => n * by);
}

/*
  Implement the function multiply that will give the following output:
 */
console.log(multiply(1, 1, 2)); // output: [1, 2]
console.log(multiply(2, 1, 2, 3)); // output: [2, 4, 6]
console.log(multiply(3, 1, 2, 3, 4)); // output: [3, 6, 9, 12]

// V1
function multiply(by, ...numbers) {
  return numbers.map(n => n * by);
}

// V2
function multiply(by, ...numbers) {
  return numbers.map(function(n) {
    return n * by;
  });
}

// V3
function multiply() {
  let [by, numbers] = [arguments[0], Array.from(arguments).slice(1)];
  return numbers.map(function(n) {
    return n * by;
  });
}

// V4
function multiply() {
  let by = arguments[0];
  let numbers = Array.from(arguments).slice(1);
  return numbers.map(function(n) {
    return n * by;
  });
}

// V5
function multiply() {
  let by = arguments[0];
  let numbers = Array.from(arguments).slice(1);
  let result = [];
  for (let n of numbers) {
    result.push(n * by);
  }
  return result;
}

// V6
function multiply() {
  let by = arguments[0];
  let numbers = Array.from(arguments).slice(1);
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * by);
  }
  return result;
}










// Spread Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// Spread Objects
let personalDetails = {name: 'Serge', age: 37};
let address = {city: 'Hararit', code: '20182'};
console.log({...personalDetails, ...address});