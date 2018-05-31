let dog = {
  name: 'Toby',
  age: 3,
  bark: function() {
    console.log(`woof, ${this.name}!`);
  }
};

dog.bark(); // -> woof, Toby!
console.log(dog.age); // -> 3
console.log(typeof dog); // -> object

let dogAbilities = {
  bark: function() { console.log(`woof, ${this.name}!`); }
};

let toby = Object.create(dogAbilities);
toby.name = 'Toby';
toby.age = 3;
toby.bark(); // -> woof, Toby!

let daisy = Object.create(dogAbilities);
daisy.name = 'Daisy';
daisy.bark(); // -> woof, Daisy!

console.log('name' in toby); // true
console.log('bark' in toby); // true
console.log(toby.hasOwnProperty('bark')); // false
console.log('bark' in Object.getPrototypeOf(toby)); // true
console.log(dogAbilities === Object.getPrototypeOf(toby)); // true
console.log(Object.prototype === Object.getPrototypeOf(Object.getPrototypeOf(toby))); // true

function newDog(name, age) {
  let dog = Object.create(dogAbilities);
  dog.name = name;
  dog.age = age;
  return dog;
}

let zehuva = newDog('Zehuva', 1.5);
zehuva.bark();

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function() {
  console.log(`woof, ${this.name}!`);
}

let barly = new Dog('Barly', 3);
barly.bark(); // woof, Barly!



console.log(typeof Dog); // function
console.log(typeof Dog.prototype); // object
console.log('constructor' in Dog.prototype); // true
console.log(Dog.prototype.constructor === Dog); // true

console.log(Object.getPrototypeOf(barly) === Dog.prototype);
console.log(barly.hasOwnProperty('bark') === false);
console.log('bark' in Object.getPrototypeOf(barly));
console.log(barly.constructor === Dog);
console.log(barly.constructor === Dog.prototype.constructor);
console.log(barly instanceof Dog);
console.log(Object.getPrototypeOf(barly).constructor === Dog);

function SuperDog() {
  Dog.apply(this, arguments);
}
Object.setPrototypeOf(SuperDog.prototype, Dog.prototype);
SuperDog.prototype.fly = function() {
  console.log(`Look, ${this.name} is flying!`);
}

let finji = new SuperDog('Finji', 8);
finji.bark(); // woof, Finji!
finji.fly(); // Look, Finji is flying!

