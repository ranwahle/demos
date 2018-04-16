'use strict';

let routes = {
    users: {
        url: '/users',
        template: users => {
            return `
                <h2>Users (${users.length})</h2>
                <ul>
                    ${users.map(u => `<li>${u.name}</li>`).join('')}
                </ul>
            `;
        },
        controller: posts => {
            console.log('postsController', posts);
        },
        resolve: {
            users: () => {
                return fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json());
            }
        }
    },
    user: {
        // url: '/user/:id',
        // template: ...
        // controller: ...
        // resolve: {
        // }
    },
    posts: {
        template: posts => {
            return `
                <h2>Posts (${posts.length})</h2>
                <ol>
                    ${posts.map(p => `<li>${p.title}</li>`).join('')}
                </ol>
            `;
        },
        controller: users => {
            console.log('usersController', users);
        },
        resolve: {
            posts: () => {
                return fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json());
            }
        }
    }
};

let view = document.querySelector('[data-view]');

window.addEventListener('hashchange', e => {
    let route = document.location.hash.replace('#/', '');
    route = routes[route];
    Promise
        .all(Object.keys(route.resolve).map(res => route.resolve[res]()))
        .then(results => {
            view.innerHTML = route.template(...results);
            route.controller(...results);
        });
});