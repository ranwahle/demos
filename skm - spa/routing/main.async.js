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
            users: async () => {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                return response.json();
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
            posts: async () => {
                let response = await fetch('https://jsonplaceholder.typicode.com/posts');
                return response.json();
            }
        }
    }
};

let view = document.querySelector('[data-view]');

window.addEventListener('hashchange', async e => {
    let route = document.location.hash.replace('#/', '');
    route = routes[route];
    let resolvePromises = Object.keys(route.resolve).map(key => route.resolve[key]());
    let results = await Promise.all(resolvePromises)
    view.innerHTML = route.template(...results);
    route.controller(...results);
});