//	A GET route with the url /api/friends. Display a JSON of all available friends
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
		// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


		// Your htmlRoutes.js file should include two routes:

		// A GET Route to /survey which should display the survey page.
		// A default USE route that leads to home.html which displays the home page.
		// Your apiRoutes.js file should contain two routes:

		// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
		// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
		// You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

// //required pkgs
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
// var app = express();
// var PORT = 3000;
// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({
//     type: "application/vnd.api+json"
// }));

// var friendFinder = [{

// }]
//Javascript file for posting friends, and saving

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Show table
app.get("/servey.html", function(req, res) {
    console.log("survey" + page);
    res.sendFile(path.join(__dirname, "survey.html"));
});
// app.get("/", function(req, res) {
//     console.log("Reservations" + res);
// 	res.sendFile(path.join(__dirname, "view.html"));
// });
// Starts the server to begin listening
// =============================================================
app.listen(PORT "/api/friends", function(req, res) {
    console.log("App listening on PORT " + PORT);
});
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

// CALCULATE THE TOTALDIFFERENCE













