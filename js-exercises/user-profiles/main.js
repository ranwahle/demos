(function() {

    'use strict';

    var baseUrl = 'https://jsonplaceholder.typicode.com';
    var ul = document.querySelector('.js-users');

    request({ action: `${baseUrl}/users` })
        .then(function(response) {
            var users = JSON.parse(response);
            ul.innerHTML = users.map(getUserHtml).join('');

            ul.addEventListener('click', function(e) {
                var id = Number(e.target.dataset.id);
                e.target.innerHTML += getUserPropsHtml(getById(users, id));
            });
        }).catch(function(error) {
            console.error(error);
        });

    function getById(data, id) {
        return data[id + 1];
    }

    function getUserHtml(data) {
        return `
            <li data-id="${data.id}">${data.name}</li>
        `;
    }

    function getUserPropsHtml(data) {
        return `
            <dl>
                <dt>Email</dt>
                <dd>${data.email}</dd>
                <dt>Username</dt>
                <dd>${data.username}</dd>
            </dl>
        `;
    }


    function request(options) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(options.method || 'get', options.action);
            if (options.method === 'post') {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            xhr.addEventListener('load', function(e) {
                resolve(e.target.responseText);
            });
            xhr.addEventListener('error', reject);
            xhr.send(options.data);
        });
    }

}());