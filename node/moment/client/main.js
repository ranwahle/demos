'use strict';

let button = document.querySelector('button');
let input = document.querySelector('#id-format');
let result = document.querySelector('data');

button.addEventListener('click', e => {
  let format = input.value;
  request(`/api/moment?format=${format}`)
    .then(res => result.textContent = res)
    .catch(err => console.error(err));
});

function request(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', e => resolve(e.target.responseText));
    xhr.addEventListener('error', e => reject(e));
    xhr.send();
  });
}