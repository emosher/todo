"use strict";

/* Controllers */

function ListCtrl($scope, TaskDB) {
    $scope.tasks = TaskDB.query();
}

// ListCtrl.$inject = [ "$scope", "TaskDB" ];

function AddCtrl($scope, TaskDB) {
    $scope.newTask = "";
    
    $scope.addTask = function() {
        TaskDB.save({ "text" : $scope.newTask, "done" : false });
        $scope.newTask = "";
    };
}

// AddCtrl.$inject = [ "$scope", "TaskDB" ];