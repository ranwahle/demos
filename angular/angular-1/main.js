'use strict';

var app = angular.module('helloApp', []);

app.controller('AppCtrl', function($scope) {
    $scope.theme = 'dark';
});

app.controller('PersonCtrl', function($scope) {
    
    $scope.firstName = 'Moshe';

    $scope.submit = function() {
        console.log($scope.firstName);
        console.log($scope.lastName);
    };
});