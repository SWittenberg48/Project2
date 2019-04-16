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
  // app.listen(5000, function(err) {
  //   if (!err) console.log("Site is live");
  //   else console.log(err);
  // });
  app.get("/yelp", function(req, res) {
    client
      .search({
        location: "chicago"
      })
      .then(response => {
        //   console.log(response.jsonBody.businesses[0]);
        // return
        var yelpData = response.jsonBody.businesses[0];
        console.log(yelpData);

        // var yelpobj = {
        //   name: yelpData.name,
        //   img_url: yelpData.image_url
        // };

        // return "yelpData";
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
