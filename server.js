// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" and "views" directories in the application directory.
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./views")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
// =============================================================
// Application routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./views/index.html"));
// });

// // Displays all profiles (possible matches)
// app.get("/api/friends", function(req, res) {
//   return res.json(friends);
// });

// // Displays a single profile, or returns false
// app.get("/api/friends/:friend", function(req, res) {
//   let chosen = req.params.friend;

//   console.log(chosen);

//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].routeName) {
//       return res.json(friends[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create new profiles - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   let newfriend = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   friends.push(newfriend);

//   res.json(newfriend);
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});