'use strict';

getUsers()
  .then(getPostsForUsers)
  .then(display)
  .catch(function (error) {
    console.error('There was a problem', error);
  });

function getPostsForUsers(users) {
  var all = new Promise(function(resolve, reject) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      one(user, i);
    }

    function one(user, index) {
      getUserPosts(user)
        .then(function(posts) {
          user.posts = posts;
          if (isLast(index, users)) {
            resolve(users); // all Promise
          }
        })
        .catch(function(error) {
          reject(error); // all Promise
        });
    }
  });
  return all;
}

function isLast(index, arr) {
  return index === arr.length - 1;
}

function display(users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.name + ': ', user.posts.length);
  }
}

function getUserPosts(user) {
  return myFetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
}

function getUsers() {
  return myFetch('https://jsonplaceholder.typicode.com/users');
}

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
