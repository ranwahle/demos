'use strict';

angular
  .module('myApp.featureA')
  .config(function($routeProvider) {
    $routeProvider
      .when('/feature-a', {
        title: 'My Feature A',
        controller: 'FeatureAController as feature',
        templateUrl: 'modules/feature-a/feature-a.html',
      });
  });
