// Path is necessary to provide getting and posting data to friends.js
const path = require('path');
const friends = require('../data/friends.js');

// Export the getting and posting requests, wrapping them in the app function
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    console.log(friends.length);
    if (friends.length === 0) {
      res.send(
        "No connections yet. Complete the survey to meet your first friend."
      );
    } else {
      for (var i = 0; i < friends.length; i++) {
        res.json(friends);
      }
    }
  });
  
  app.post("/api/friends", function(req, res) {
    //capture the user input object - passed as userData from HTML
    let newfriend = req.body;
    console.log("This is a new friend\n", newfriend);
    let newfriendAns = req.body.ans;
    console.log("This is friends", friends);
    //match logic
    let matchName = "";
    let matchImage = "";
    let totalDifference = 10000; // Make the initial value big for comparison
  
    //
    //do the comparison for everyone in the friends array
    for (let i = 0; i < friends.length; i++) {
      // Compute differences for each answer
      let diff = 0;
      for (var j = 0; j < newfriendAns.length; j++) {
        diff += Math.abs(friends[i].ans[j] - newfriendAns[j]);
      }
      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        console.log("Closest match found = " + diff);
        console.log("Friend name = " + friends[i].name);
        console.log("Friend image = " + friends[i].photo);
  
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
  
        console.log("this is match name:", matchName);
        console.log("this is match image:", matchImage);
      }
    }
  
    //add a new friend
    friends.push(newfriend);
  
    console.log("this is match name:", matchName);
    console.log("this is match image:", matchImage);
    //send the response back to the html page
    res.json({ matchName: matchName, matchImage: matchImage });
  });
};