'use strict';

angular
  .module('myApp.featureB')
  .config(function($routeProvider) {
    $routeProvider
      .when('/feature-b', {
        title: 'My Feature B',
        controller: 'FeatureBController as feature',
        templateUrl: 'foobar',
        resolve: {
          foo: function($ocLazyLoad) {
            // var path = 'modules/feature-b/';
            // return $ocLazyLoad.load([
            //   path + 'feature-b.controller.js',
            //   // {type: 'html', path: path + 'feature-b.html'}
            // ]);
          }
        }
      });
  });
