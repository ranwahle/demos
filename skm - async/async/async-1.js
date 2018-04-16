setTimeout(function() {
  task(1);
  setTimeout(function() {
    task(2);
    setTimeout(function() {
      task(3);
    }, 1000);
  }, 1000);
}, 1000);

function task(n) {
  console.log('Task ' + n);
}
