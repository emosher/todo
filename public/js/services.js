"use strict";

/* Services */

angular.module("myApp.services", ["ngResource"])
    .factory("TaskDB", function($resource) {
        
        return $resource("/api/tasks/");
        
    });
