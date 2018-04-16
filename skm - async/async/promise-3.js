'use strict';

window.addEventListener('error', onWindowError);
window.addEventListener('unhandledrejection', onPromiseError);

task(1)                                 // -> Task 1
    .then((result) => task(result + 1)) // -> Task 2
    .then((result) => task(result + 1)) // -> Task 3
    .then((result) => task(result + 1)) // -> Task 4
    .then((result) => task(result - 5)) // -> Error
    .then(() => console.log('Done'))    // -> Done
    .catch(err => console.error(`Caught in Promise [error=${err}]`));

function task(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject('Must be positive');
                return;
            }
            console.log(`Task ${n}`);
            resolve(n);
        }, 200);
    });
}

function onWindowError(e) {
  e.preventDefault();
  console.error(`Caught on window [message=${e.message}]`);
}

function onPromiseError(e) {
    e.preventDefault();
    console.error(`Handled unhandled [message=${e.reason}]`);
}
