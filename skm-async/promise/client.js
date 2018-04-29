'use strict';

/*
task(1)
  .then(task(2))
  .then(task(3))
  .then(function() {
    console.log('Done.');
  });
*/

task(1)()
    .then(task(2))
    .then(task(3))
    .then(function() {
        console.log('Done.');
    });




function task(n) {
    return function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log(n);
                resolve();
            }, 3000);
        });
    };
}