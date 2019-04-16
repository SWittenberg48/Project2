// var city = $("#tripAddress").val();
const yelp = require("yelp-fusion");
const client = yelp.client(
  "PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx"
);
function yelpQuery() {
  client
    .search({
      location: "chicago"
    })
    .then(response => {
      //   console.log(response.jsonBody.businesses[0]);
      // return
      var yelpData = response.jsonBody.businesses[0];
      return "yelpData";
    })
    .catch(e => {
      console.log(e);
    });
}

module.exports = yelpQuery;
