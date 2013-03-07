
/**
 * Module dependencies.
 */

var express = require("express"),
    api = require("./api");

var app = module.exports = express();

// Shared configurations
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + "/public"));
});

// Dev configs
app.configure("development", function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Production configs
app.configure("production", function(){
    app.use(express.errorHandler());
});

// GET
app.get("/api/tasks", api.tasks);
app.get("/api/tasks/:id", api.getById);

// POST
app.post("/api/tasks", api.add);

// PUT
app.put("/api/tasks/:id", api.edit);

// DELETE
app.del("/api/tasks/:id", api.remove);

// Start server
app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
