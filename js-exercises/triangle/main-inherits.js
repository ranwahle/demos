'use strict';

var Shape = {
  type: 'shape',
  getType: function () {
    return this.type;
  }
};

var Triangle = inherit(Shape, {
  type: 'triangle',
  getPerimeter: function () {
    return this.a + this.b + this.c;
  }
});

var t1 = inherit(Triangle, {
  a: 1,
  b: 2,
  c: 3
});

var t2 = inherit(Triangle, {
  a: 2,
  b: 3,
  c: 4
});

function inherit (type, props) {
  var t = Object.create(type);
  Object.keys(props).forEach(function (prop) {
    t[prop] = props[prop];
  });
  return t;
}

function inherit (type, props) {
  var t = Object.create(type);
  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      t[prop] = props[prop];
    }
  }
  return t;
}

function inherit (type, props) {
  var t = Object.create(type);
  Object.assign(t, props);
  return t;
}

function inherit (type, props) {
  return Object.setPrototypeOf(props, type);
}

// -------------------------------
console.log('type=%s, perimeter=%d', t1.getType(), t1.getPerimeter());
console.log('type=%s, perimeter=%d', t2.getType(), t2.getPerimeter());
