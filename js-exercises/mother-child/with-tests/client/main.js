'use strict';

let lib = window.lib;

request('GET', '/ancestry', ancestry => {
  let fullData = [];
  ancestry.forEach(person => {
    request('GET', `/ancestry/${person._id}`, personData => {
      fullData.push(personData);
      if (fullData.length === ancestry.length) {
        console.log(lib.getAverage(fullData));
      }
    }, console.error);
  });
}, console.error);