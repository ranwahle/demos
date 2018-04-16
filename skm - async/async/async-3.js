try {
  task(-2);
} catch(e) {
  console.error('Handled: ' + e);
}

function task(n) {
  setTimeout(function() {
    if (n > 0) {
      console.log('Task ' + n);
    } else {
      throw 'N must be positive';
    }
  }, 1000);
}
