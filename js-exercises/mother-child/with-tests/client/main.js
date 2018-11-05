'use strict';

request('GET', '/ancestry', ancestry => {
  let fullData = [];
  ancestry.forEach(person => {
    request('GET', `/ancestry/${person._id}`, personData => {
      fullData.push(personData);
      if (fullData.length === ancestry.length) {
        console.log(getAverage(fullData));
      }
    }, console.error);
  });
}, console.error);