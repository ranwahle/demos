'use strict';

var Shape = {
  type: 'shape',
  getType: function () {
    return this.type;
  }
};

var Triangle = Object.create(Shape);
Triangle.type = 'triangle';
Triangle.getPerimeter = function () {
  return this.a + this.b + this.c;
};

var t1 = createTriangle(1, 2, 3);
var t2 = createTriangle(2, 3, 4);

function createTriangle (a, b, c) {
  var t = Object.create(Triangle);
  t.a = a;
  t.b = b;
  t.c = c;
  return t;
}

// -------------------------------
console.log('type=%s, perimeter=%d', t1.getType(), t1.getPerimeter());
console.log('type=%s, perimeter=%d', t2.getType(), t2.getPerimeter());
