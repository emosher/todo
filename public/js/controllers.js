'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function ListCtrl($scope, Tasks) {
    $scope.tasks = Tasks.get();
}

function AddCtrl($scope, Tasks) {
    $scope.newTask = "";
    
    $scope.addTask = function() {
        Tasks.add($scope.newTask);
        $scope.newTask = "";
    };
}

