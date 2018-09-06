//Starting server.js - Solved server.js from 15-ExtendedApp
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initial individual profile data for MyCoffeemate
// =============================================================
var profiles = [
  {
    "name":"Elon Musk",
    "photo":"https://amp.businessinsider.com/images/59f8d02cbcf93d46628b591c-750-500.jpg",
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
  },
  {
    "name":"Mark Zuckerberg",
    "photo":"https://cnet3.cbsistatic.com/img/pQWoXJ7cBNKcLeH-F4XYLdfqrIE=/970x0/2018/03/23/b2928724-8ca9-4aa6-92fe-fa97a42deb34/f8-facebook-mark-zuckerberg-0112.jpg",
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
  },
  {
    "name":"Sheryl Sandberg",
    "photo":"https://specials-images.forbesimg.com/imageserve/5a8ef078a7ea431690141af5/416x416.jpg?background=000000&cropX1=1474&cropX2=3673&cropY1=407&cropY2=2605",
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
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all profiles
app.get("/api/profiles", function(req, res) {
  return res.json(profiles);
});

// Displays a single profile, or returns false
app.get("/api/profiles/:profile", function(req, res) {
  var chosen = req.params.profile;

  console.log(chosen);

  for (var i = 0; i < profiles.length; i++) {
    if (chosen === profiles[i].routeName) {
      return res.json(profiles[i]);
    }
  }

  return res.json(false);
});

// Create New profiles - takes in JSON input
app.post("/api/profiles", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newprofile = req.body;

  // Using a RegEx Pattern to remove spaces from newprofile
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newprofile.routeName = newprofile.name.replace(/\s+/g, "").toLowerCase();

  console.log(newprofile);

  profiles.push(newprofile);

  res.json(newprofile);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
