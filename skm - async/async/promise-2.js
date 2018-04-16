task(1)()
  .then(task(2))
  .then(task(3))
  .then(function() {
    console.log('Done.');
  });

function task(n) {
  return function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('Task ' + n);
        resolve();
      }, 1000);
    });
  };
}

