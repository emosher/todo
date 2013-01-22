'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/one', {templateUrl: 'partials/one', controller: MyCtrl1});
    $routeProvider.when('/two', {templateUrl: 'partials/two', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/one'});
    $locationProvider.html5Mode(true);
  }]);