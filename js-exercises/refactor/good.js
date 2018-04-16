'use strict';

console.log('hello from client');

var form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    request({
        method: form.method,
        action: form.action,
        data: serialize(form)
    }).then(function (result) {
        console.log(result);
    });
});

function serialize(form) {
    return form.elements.reduce((data, element) => {
        if (element.name) {
            data += element.name + '=' + encodeURIComponent(element.value) + '&';
        }
        return data;
    }, '');
}

function request(options) {
    /* jshint -W098 */
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, options.action);
        if (options.method === 'post') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.addEventListener('load', e => {
            resolve(e.target.responseText);
        });
        xhr.send(options.data);
    });
}