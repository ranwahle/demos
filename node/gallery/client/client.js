loadGallery();
listenToAjaxSubmit();

function listenToAjaxSubmit() {
  document.querySelector('[data-upload]').addEventListener(
    'click', e => {
      e.preventDefault();
      let form = document.querySelector(e.target.dataset.uploadForm);
      let fileInput = document.querySelector(e.target.dataset.uploadFile);

      let formData = new FormData();
      formData.append(fileInput.name, fileInput.files[0]);
      formData.append('isAjax', true);

      request(form.method, form.action, result => {
        loadGallery();
      }, err => {
        console.error(err);
      }, form.enctype, formData);
    });
}

function loadGallery() {
  request('GET', '/gallery', images => {
    document.querySelector('#gallery').innerHTML = render(images.sort((a, b) => a > b));
  }, err => {
    console.error(err);
  });
}

function render(images) {
  if (!images.length) {
    return `No Images...`;
  }
  return images.map(img => `<li><img src="${img.url}"></li>`).join('');
}


function request(method, url, resolve, reject, contentType, data) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  if (!data instanceof FormData) {
    xhr.setRequestHeader('Content-Type', contentType || 'application/json');
  }
  xhr.addEventListener('load', e => {
    if (e.target.status > 300) {
      reject(e.target.statusText);
      return;
    }
    resolve(JSON.parse(e.target.responseText || '{}'));
  });
  xhr.addEventListener('error', err => {
    reject(err);
  });
  xhr.send(data);
}