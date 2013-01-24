/*
 * Serve data to our AngularJS client.  This is the file that will do database work (eventually).
 */

var tasks = [{
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

/**
 * GET a list of all tasks
 */
exports.tasks = function(req, res) {
    res.json(tasks);
};

/**
 * POST a new task
 */
exports.add = function(req, res) {
    tasks.push(req.body);
    res.json(req.body);
};

/**
 * PUT update done field on a given task
 */
exports.edit = function(req, res) {
    
};

/**
 * DELETE delete the given task
 */
exports.remove = function(req, res) {
    
};