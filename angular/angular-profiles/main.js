'use strict';

var app = angular.module('profilesApp', []);

app.service('UsersService', function($http, $q) {

    var users = [];

    this.getUsers = function() {
        if (users.length) {
            console.log('From cache...');
            return $q.resolve(users);
        }
        return $http
            .get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                console.log(response.data);
                users = response.data;
                return response.data;
            });
    };
});

app.controller('ProfilesCtrl', function($scope, UsersService) {

    $scope.users = [];

    getUsers();

    function getUsers() {
        UsersService
            .getUsers()
            .then(function(users) {
                $scope.users = users;
            });
    }


    $scope.add = function(newUser) {
        $scope.users.push(angular.copy(newUser));
    };

    $scope.selectProfile = function(user) {
        $scope.selectedProfile = user;
    };

    $scope.updateList = function() {
        getUsers();
    };
});

app.directive('profile', function() {
    return {
        restrict: 'E',
        template: `Name: {{user.name}}, Email: {{user.email}}`,
        // template: `<input type="text" ng-model="profile.name">`,
        // scope: {
        //     profile: '='
        // }
    };
});

// app.component('profile', {
//     template: `<input type="text" ng-model="$ctrl.profile.name">`,
//     controller: function() {
//         this.profile = angular.merge({}, this.profile);
//     },
//     bindToController: true,
//     bindings: {
//         profile: '<'
//     }
// });