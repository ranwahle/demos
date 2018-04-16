'use strict';

console.log(add1(3)(4)(5)); //-> 12
console.log(add2(3)(4)(5) + 5); //-> 17

function add2 (num) {
  add2.toString = function () { return add2.sum; };
  add2.sum = add2.sum || 0;
  add2.sum += num;
  return add2;
}

function add1 () {
  return function () {
    return sum.bind(null, ...arguments);
  }.bind(null, ...arguments);

  function sum () {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce((a, b) => { return a + b; });
  }
}
