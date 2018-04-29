try {
  task(1);
  task(-2);
  task(3);
} catch(error) {
  console.error('Handled: ' + error);
}

function task(n) {
  if (n > 0) {
    console.log('Task ' + n);
  } else {
    throw 'N must be positive';
  }
}
