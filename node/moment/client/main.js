'use strict';

let form = document.querySelector('form');
let input = document.querySelector('#id-format');
let result = document.querySelector('data');

form.addEventListener('submit', e => {
  e.preventDefault();
  let format = input.value;
  request(
    `${form.action}?format=${format}`,
    res => result.textContent = res,
    err => console.error(err)
  );
});

function request(url, resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', e => resolve(e.target.responseText));
  xhr.addEventListener('error', e => reject(e));
  xhr.send();
}