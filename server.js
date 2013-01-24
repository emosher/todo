
/**
 * Module dependencies.
 */

var express = require("express"),
    routes = require("./routes"),
    api = require("./routes/api");

var app = module.exports = express();

// Shared configurations
app.configure(function(){
    app.set("views", __dirname + "/views");
    // This seems odd - find another way to do views with HTML
    app.engine(".html", require("ejs").renderFile);
    app.set("view engine", "html");
    app.set("view options", {
        layout: false
    }); 
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + "/public"));
    app.use(app.router);
});

// Dev configs
app.configure("development", function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Production configs
app.configure("production", function(){
    app.use(express.errorHandler());
});

// Routes
app.get("/", routes.index);
app.get("/partials/:name", routes.partials);

// GET
app.get("/api/tasks", api.tasks);

// POST
app.post("/api/tasks", api.add);

// redirect all others to the index (HTML5 history)
app.get("*", routes.index);

// Start server
app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
