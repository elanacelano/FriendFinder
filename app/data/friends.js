// characters from Dogma and Chasing Amy for friendFinder app
var friendFinder = [{
  routeName: "jay",
  name: "Jay",
}, {
  routeName: "silentBob",
  name: "Silent Bob",
}, {
  routeName: "rufus",
  name: "Rufus",
}, {
  routeName: "loki",
  name: "Loki",
}, {
  routeName: "johnDoeJersey",
  name: "John Doe Jersey",		
}, {
  routeName: "serendipity",
  name: "Serendipity",
}, {
  routeName: "bethany",
  name: "Bethany",
}, {
  routeName: "Liz",
  name: "Liz",
}, {
  routeName: "amy",
  name: "Amy",
}, {
  routeName: "jane",
  name: "Jane",		
}
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Friend Finder App!");
});

app.get("/:friends", function(req, res) {
  var chosen = req.params.characters;

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
	
}]
