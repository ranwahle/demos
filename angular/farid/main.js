'use strict';

angular.module('myApp', []);

angular
  .module('myApp')
  .controller('AppCtrl', AppCtrl)
  .directive('myWatcher', myWatcher);

AppCtrl.$inject = ['$scope', '$timeout'];

angular.bootstrap(document, ['myApp']);

function myWatcher () {
  return {
    restrict: 'A',
    link: function ($scope, element, attrs) {
      $scope.$watch(attrs.myWatcher, function (newValue, oldValue) {
        element.val(newValue);
        console.log('old value was ' + oldValue);
      });
    }
  };
}

function AppCtrl ($scope, $timeout) {
  $scope.data = {
    greeting: 'Hi',
    name: 'Serge'
  };

  $timeout(function () {
    $scope.data.name = 'Farid';
    console.log('$timeout 1 fired');
  }, 3000);

  $timeout(function () {
    $scope.data.greeting = 'Hello';
    console.log('$timeout 2 fired');
  }, 4000);

  window.setTimeout(function () {
    $scope.data.name = 'Moshe';
    $scope.$apply();
  }, 5000);
}
