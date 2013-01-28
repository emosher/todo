"use strict";

/* Controllers */

function ListCtrl($scope, TaskDB) {
    // Get tasks list
    $scope.tasks = TaskDB.query();
    
    // Update when checkbox changes
    $scope.update = function(task) {
        TaskDB.update(task);
    };
    
    // Remove finished tasks
    $scope.remove = function() {
        angular.forEach($scope.tasks, function(task) {
            if (task.done) {
                TaskDB.remove({id: task["_id"]});
            }
        });
        // Reload tasks
        $scope.tasks = TaskDB.query();
    };
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