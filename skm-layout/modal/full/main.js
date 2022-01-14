const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const openButtons = document.querySelectorAll('.modal-open');
const cancel = document.querySelector('.modal-cancel');
const close = document.querySelector('.modal-close');
const submit = document.querySelector('.modal-submit');

openButtons.forEach(openButton => {
  openButton.addEventListener('click', show);
});
cancel.addEventListener('click', hide);
close.addEventListener('click', hide);
submit.addEventListener('click', hide);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    hide();
  }
});

function show() {
  modal.classList.remove('is-hidden');
  disableScroll();
}

function hide() {
  modal.classList.add('is-hidden');
  enableScroll();
}

function disableScroll() {
  body.classList.add('is-modal-open');
}

function enableScroll() {
  body.classList.remove('is-modal-open');
}