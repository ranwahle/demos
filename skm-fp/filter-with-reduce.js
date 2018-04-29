'use strict';

function filter(arr, fn) {
  return arr.reduce((filtered, val) => {
    return fn(val) ? filtered.concat(val) : filtered;
  }, []);
}


console.log(filter([1, 2, 3, 4, 5, 6], v => v % 2 === 0));