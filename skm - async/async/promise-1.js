task(-1)
  .then(function() {
  	return task(2);
  })
  .then(function() {
  	return task(3);
  })
  .catch(function(error) {
  	console.error('Handled: ' + error);
  });



function task(n) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (n > 0) {
      	console.log(n);
        resolve();
      } else {
        reject('N should be positive');
      }
    }, 1000);
  });
  return p;
}
