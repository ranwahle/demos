'use strict';

function Animal(type) {
  this.type = type;
}

Animal.prototype.identify = function() {
  return `I'm a ${this.type}`;
};

var b = new Animal('bear');
var d = new Animal('dog');
var c = Animal('fish');
// typeof c === 'undefined';
// window.type === 'fish'
console.log(b.type); // bear
console.log(d.type); // dog

// -------------

class Animal {
  constructor(type) {
    this.type = type;
  }
  identify() {
    return `I'm a ${this.type}`;
  }
}

var b = new Animal('bear');
var d = new Animal('dog');

console.log(b.type); // bear
console.log(d.type); // dog

// -------------
var b = {
  type: 'bear'
};

var d = {
  type: 'dog'
};

console.log(b.type); // bear
console.log(d.type); // dog

// -------------
function createAnimal(type) {
  return { type };
}

var b = createAnimal('bear');
var d = createAnimal('dog');

console.log(b.type); // bear
console.log(d.type); // dog