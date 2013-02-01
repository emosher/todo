### Todo

Simple todo example app with AngularJS on the frontend, Node/Express, MongoDB, and Socket.IO on the backend.  

If you don't have them already, go get Node and MongoDB first.  Then clone the repo, run `npm install` to grab the dependencies and run with: 

    node server.js

Navigate to `localhost:3000` to view the app.

### Frontend

The frontend is designed to be as simple as possible.  It uses Angular JS to display 2 views.  The first view is a list of tasks that need to be done with checkboxes to toggle between done/not done.  The second view will show a textbox and button to allow the user to add a new task.  Through Angular's service API, the app talks with the backend.

### Backend

The backend will use Express to handle the main app logic and routing.  MongoDB will handle the data and if I get to it, Socket.IO will handle... well, Socketing.  The API will be:

    /api/tasks          GET     Get an array of all tasks
    /api/tasks/:id      GET     Get the task with id of :id
    /api/tasks          POST    Add a new task
    /api/tasks/:id      PUT     Update the task with id of :id
    /api/tasks/:id      DELETE  Remove the task with id of :id
