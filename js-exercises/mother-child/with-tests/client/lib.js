(function () {

  'use strict';

  let lib = {
    getAverage,
    average,
    createHash,
    request
  };

  if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = lib;
  } else {
    window.lib = lib;
  }

  function getAverage(list) {
    let byName = createHash(list, 'name');
    let withMothers = list.filter(p => Boolean(byName[p.mother]));
    let ageDiff = p => p.born - byName[p.mother].born;
    let ageDiffs = withMothers.map(ageDiff);
    return average(ageDiffs);
  }

  function average(list) {
    return list.reduce((sum, value) => sum + value, 0) / list.length;
  }

  function createHash(list, key) {
    return list.reduce((hash, item) => {
      hash[item[key]] = item;
      return hash;
    }, {});
  }

  function request(method, url, resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', e => {
      resolve(JSON.parse(e.target.responseText))
    });
    xhr.addEventListener('error', err => {
      reject(err);
    });
    xhr.send();
  }

}());