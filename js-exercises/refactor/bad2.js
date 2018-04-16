'use strict';

console.log('hello from client');

var form1 = document.querySelector('#form1');
var form2 = document.querySelector('#form2');

form1.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(form1.action);
    post(form1, buildData(form1), result => console.log(result));
});

form2.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(form2.action);
    post(form2, buildData(form2), result => localStorage.setItem('myKey', result));
});

function buildData(form) {
    var data = '';
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.name) {
            data += element.name + '=' + encodeURIComponent(element.value) + '&';
        }
    }
    return data;
}

function post(form, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    if (form.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.addEventListener('load', function (e) {
        fn(e.target.responseText);
    });
    xhr.send(data);
}