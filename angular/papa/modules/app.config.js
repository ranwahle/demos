'use strict';

angular
  .module('myApp')
  .config(function($routeProvider, $locationProvider) {
    $locationProvider
      .html5Mode(false)
      .hashPrefix('');
  });
