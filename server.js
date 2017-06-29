// Your server.js file should require the basic npm packages we"ve used in class: express, body-parser and path        
//required pkgs
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));


// In this blank space is where we will write our code.
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/home.html');
});





















app.listen(PORT);





