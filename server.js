//Starting server.js - Solved server.js from 15-ExtendedApp
// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "images" directory in the application directory.

app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/", express.static(path.join(__dirname, "common-css")));
// app.use("/", express.static(path.join(__dirname, "common-js")));
// app.use("/", express.static(path.join(__dirname, "fonts")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initial individual profile data for MyCoffeemate
// =============================================================
let profiles = [
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
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});