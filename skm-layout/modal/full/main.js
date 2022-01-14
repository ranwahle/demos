const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const open = document.querySelector('.modal-open');
const cancel = document.querySelector('.modal-cancel');
const close = document.querySelector('.modal-close');
const submit = document.querySelector('.modal-submit');

open.addEventListener('click', show);
cancel.addEventListener('click', hide);
close.addEventListener('click', hide);
submit.addEventListener('click', hide);

function show() {
  modal.classList.remove('is-hidden');
  body.classList.add('is-modal-open');
}

function hide() {
  modal.classList.add('is-hidden');
  body.classList.remove('is-modal-open');
}