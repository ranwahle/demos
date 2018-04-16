'use strict';

var forms = document.querySelectorAll('form');
for (var i = 0; i < forms.length; i++) {
  ajaxify(forms[i]);
}

function sendRequest (url, method, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.open(method, url);
  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  xhr.send(data);
}

function ajaxify (form) {
  form.addEventListener('submit', onSubmit);

  function onSubmit (e) {
    e.preventDefault();
    var action = form.getAttribute('action');
    var method = form.getAttribute('method') || 'GET';
    sendRequest(action, method, form.contents.value, function (e) {
      console.log(e);
      console.log('Responded with: ' + e.target.responseText);
    });
  }
}