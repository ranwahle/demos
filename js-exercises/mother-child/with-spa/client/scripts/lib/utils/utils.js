if (typeof module !== 'undefined' && typeof module.exports === 'object') {
  module.exports = {
    average,
    createHash,
    request,
  };
} else {
  window.utils = {
    average,
    createHash,
    request,
  };
}

function average(list) {
  if (!list.length) {
    return null;
  }
  return list.reduce((sum, value) => sum + value, 0) / list.length;
}

function createHash(list, key) {
  return list.reduce((hash, item) => {
    hash[item[key]] = item;
    return hash;
  }, {});
}

function request(method, url, resolve, reject, data) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', e => {
    resolve(JSON.parse(e.target.responseText))
  });
  xhr.addEventListener('error', err => {
    reject(err);
  });
  xhr.send(data);
}