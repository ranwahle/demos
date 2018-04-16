// Your code here.
function every(arr, predicate) {
    for (let val of arr) {
        if (!predicate(val)) {
            return false;
        }
    }
    return true;
}

function some(arr, predicate) {
    for (let val of arr) {
        if (predicate(val)) {
            return true;
        }
    }
    return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false