'use strict';

getUsers()
  .then(getAlbumsForUsers)
  .then(getPhotosForUsers)
  .then(display)
  .catch(onError);

function getAlbumsForUsers(users) {
  return Promise.all(usersToAlbums(users))
    .then(function(albums) {
      return Promise.resolve(attach(users, 'albums', albums));
    });
}

function getPhotosForUsers(users) {
  return Promise.all(usersToPhotos(users))
    .then(function(photos) {
      return Promise.resolve(attach(users, 'photos', photos));
    });
}

function attach(arr, prop, data) {
  return arr.map(function(obj) {
    return Object.assign({}, obj, {
      prop: data
    });
  });
}

function usersToAlbums(users) {
  return users.map(getAlbums);
}

function usersToPhotos(users) {
  return users.map(function(user) {
    return user.albums.map(getPhotos);
  });
}

function display(users) {
  users.forEach(displayUser);
}

function displayUser(user) {
  console.log(user.name + ' ' + user.numPhotos);
}

function onError(error) {
  console.error(error);
}

function getUsers() {
  return ajax('https://jsonplaceholder.typicode.com/users');
}

function getAlbums(user) {
  return ajax('https://jsonplaceholder.typicode.com/albums/userId=' + user.id);
}

function getPhotos(album) {
  return ajax('https://jsonplaceholder.typicode.com/photos/albumId=' + album.id);
}

function ajax(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    });
}
