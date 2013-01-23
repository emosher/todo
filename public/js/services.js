'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .service("Tasks", function() {
        
        // Get tasks from server here...
        var data = [
            {
                text: "learn Angular",
                done: true
            },
            {
                text: "learn Node",
                done: true
            },
            {
                text: "learn MongoDB",
                done: false
            },
            {
                text: "learn Socket.io",
                done: false
            },
            {
                text: "learn Express",
                done: false
            }
        ];
        
        var get = function(){
            return data;
        };
        
        var add = function(newTask){
            data.push({text: newTask, done: false});
        };
        
        return {
            get: get,
            add: add
        };
    });
