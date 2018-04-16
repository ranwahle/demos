'use strict';

getUsers()
  .then(getPostsForUsers)
  .then(displayUsers)
  .catch(function (error) {
    console.error('There was a problem', error);
  });

function getPostsForUsers(users) {
  return Promise.all(users.map(one));

  function one(user) {
    return getUserPosts(user)
      .then(function(userPosts) {
        return Object.assign({}, user, {
          posts: userPosts
        });
      });
  }
}

function displayUsers(users) {
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
