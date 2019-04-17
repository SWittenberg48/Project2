var db = require("../models");
const yelp = require("yelp-fusion");
const client = yelp.client(
  "PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx"
);

// var yelp = require("../services/yelpPackage");
// console.log("hello", yelp);
// yelp();
// User Authentication Routes

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome to Passport with Sequelize");
  });

  app.post("/yelp", function(req, res) {
    var currentCity = $("#tripAddress").val();
    client
      .search({
        location: currentCity,
        limit: 3
      })
      .then(response => {
        // console.log(response.jsonBody.businesses[0]);
        // return
        var userOptions = [];

        for (let i = 0; i < response.jsonBody.businesses.length; i++) {
          var bizName = response.jsonBody.businesses[i].name;
          var bizImg = response.jsonBody.businesses[i].image_url;
          var bizSite = response.jsonBody.businesses[i].url;
          var bizLocation = response.jsonBody.businesses[
            i
          ].location.display_address.join(" ");
          var bizObj = {
            name: bizName,
            img: bizImg,
            website: bizSite,
            location: bizLocation
          };
          userOptions.push(bizObj);
        }
        console.log(userOptions);
        res.json(userOptions);
      })
      .catch(e => {
        console.log(e);
      });
  });

  app.post("/save", function(req, res) {
    // console.log("req.body");
    console.log(req.body);

    // res.json({ hello: "hello" });
  });
};
