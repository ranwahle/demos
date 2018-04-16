task(1, onTask1);

function onTask1() { task(2, onTask2); }

function onTask2() { task(3, onTask3); }

function onTask3() { console.log('Done.'); }

function task(n, callback) {
  setTimeout(function() {
    console.log('Task ' + n);
    callback();
  }, 1000);
}
