'use strict';

let form = document.querySelector('form');
let input = document.querySelector('#id-format');
let result = document.querySelector('data');

form.addEventListener('submit', e => {
  e.preventDefault();
  let format = input.value;
  request(`${form.action}?format=${format}`)
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