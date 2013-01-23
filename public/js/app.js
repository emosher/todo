'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/list', controller: ListCtrl});
    $routeProvider.when('/add', {templateUrl: 'partials/add', controller: AddCtrl});
    $routeProvider.otherwise({redirectTo: '/list'});
    $locationProvider.html5Mode(true);
  }]);