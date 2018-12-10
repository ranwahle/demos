
{
  let utils = {
    average,
    createHash,
    request,
    handleHttpError
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = utils;
  } else {
    window.utils = utils;
  }
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
    if (e.target.status > 200) {
      reject(e.target.statusText);
      return;
    }
    resolve(JSON.parse(e.target.responseText));
  });
  xhr.addEventListener('error', err => {
    reject(err);
  });
  xhr.send(data);
}

function handleHttpError(error) {
  if (error === 'Unauthorized') {
    document.location = '/login.html';
    return;
  }
  console.error(error);
}