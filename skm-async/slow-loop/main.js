// #1
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }


// #2
// slowLoop([42, 11, 55, 6], (v, i) => {
//   console.log(`[${i}] = ${v}`);
// }, 500);

// function slowLoop(arr, callback, delay = 0) {
//   for (let i  = 0; i < arr.length; i++) {
//     setTimeout(() => {
//       callback(arr[i], i);
//     }, delay * i);
//   }
// }

// #3
slowLoop([42, 11, 55, 6], (v, i) => `[${i}] = ${v}`, 1000)
  .then(results => console.log('finished!', results));

function slowLoop(arr, callback, delay = 0) {
  return Promise.all(arr.map((v, i) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('iteration', v, i);
        resolve(callback(v, i));
      }, delay * i);
    });
  }));
}