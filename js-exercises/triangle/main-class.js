'use strict';

function Shape (type) {
  this.type = type || 'shape';
}

Shape.prototype.getType = function () {
  return this.type;
};

function Triangle (a, b, c) {
  Shape.call(this, 'triangle');
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype = new Shape('triangle');

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

// var t1 = newTriangle(1, 2, 3);
var t1 = new Triangle(1, 2, 3);
var t2 = new Triangle(2, 3, 4);
var s1 = new Shape();

console.log('type=%s, perimeter=%d', t1.getType(), t1.getPerimeter());
console.log('type=%s, perimeter=%d', t2.getType(), t2.getPerimeter());
console.log('type=%s', s1.getType());

console.log(t1 instanceof Triangle);
console.log(t2 instanceof Triangle);
console.log(t2 instanceof Shape);
console.log(s1 instanceof Shape);

function inherit (Class, Base) {
  Class.prototype = Object.create(Base.prototype);
  Class.prototype.constructor = Class;
}
