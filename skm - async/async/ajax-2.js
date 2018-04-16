'use strict';

getUsers()
  .then(getPostsForUsers)
  .then(display)
  .catch(function (error) {
    console.error('There was a problem', error);
  });

function getPostsForUsers(users) {
  var allPosts = Promise.all(users.map(getUserPosts));
  return allPosts.then(function (posts) {
    return Promise.resolve(attachPosts(users, posts));
  });
}

function display(users) {
  users.forEach(function (user) {
    console.log(user.name + ': ', user.posts.length);
  });
}

function attachPosts(users, posts) {
  return users.map(function (user, index) {
    return Object.assign({}, user, {
      posts: posts[index]
    });
  });
}

function getUsers() {
  return myFetch('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(user) {
  return myFetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
}

// ----------------------------------

function myFetch(url) {
  var p = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onSuccess);
    xhr.open('GET', url);
    xhr.send();

    function onSuccess(response) {
      try {
        var data = JSON.parse(response.target.responseText);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }
  });
  return p;
}
