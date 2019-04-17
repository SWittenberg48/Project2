// var city = $("#tripAddress").val();
const yelp = require("yelp-fusion");
const client = yelp.client(
  "PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx"
);

client
  .search({
    location: "orlando",
    categories: {
      alias: "Landmarks & Historical Places"
    }
  })
  .then(response => {
    console.log(
      response.jsonBody.businesses
      //   +" " + response.jsonBody.businesses[0].location.display_address
    );
  })
  .catch(e => {
    console.log(e);
  });

// events search
// client
//   .eventSearch({
//     categories: 2,
//     is_free: true,
//     location: "chicago"
//   })
//   .then(response => {
//     console.log(response.jsonBody.events[2]);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// client
//   .categoryDetails("landmarks")
//   .then(response => {
//     console.log(response.jsonBody.category.title);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// Dave's code
// var city = $("#tripAddress").val();
// const yelp = require("yelp-fusion");
// const client = yelp.client(
//   "PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx"
// );
// function yelpQuery() {
//   client
//     .search({
//       location: "chicago"
//     })
//     .then(response => {
//       //   console.log(response.jsonBody.businesses[0]);
//       // return
//       var yelpData = response.jsonBody.businesses[0];
//       return "yelpData";
//     })
//     .catch(e => {
//       console.log(e);
//     });
// }

// module.exports = yelpQuery;
