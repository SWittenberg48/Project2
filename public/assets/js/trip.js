var firstChoice = [];
var secondChoice = [];
var thirdChoice = [];

    
    //  Function to display the First choices of their City Trip
function displayOptions(){
  // restaurant  choice
  // we have take top 3 options from Yelp-fusion NPM package and put them in choiceOne, choiceTwo, choiceThree. Assign those choices to the radial buttons. 
  // When user makes a selection and click "Next" button we store that data in the DB for their first choice. 
  // Then clear out data from choice variables, list 3 new Event options. Repeat process same as above, then do it one last time for Landmarks.$
  // After 3 selections are made bump over itinerary  HTML and pull the data we stored in the DB to populate the page. 

  var choiceOne = [
    // this is where NPM data should go for choiceOne
   ];
   console.log(choiceOne);
   var optionOne = $("#optionOne");
    for(var i=0; i<choiceOne.length;i++){
      var newOption = $("<p>"+choiceOne[i]+"</p>");
      optionOne.append(newOption);
      }
  
  var choiceTwo = [
     // this is where NPM data should go for choiceTwo
   ];
   console.log(choiceTwo);
   var optionTwo = $("#optionTwo");
    for(var i=0; i<choiceTwo.length;i++){
      var newOption = $("<p>"+choiceTwo[i]+"</p>");
      optionTwo.append(newOption);
      }
      
  var choiceThree = [
    // this is where NPM data should go for choiceThree
   ];
   console.log(choiceThree);
   var optionThree = $("#optionThree");
    for(var i=0; i<choiceThree.length;i++){
      var newOption = $("<p>"+choiceThree[i]+"</p>");
      optionThree.append(newOption);
      }

      // after three choices made this is where we run a POST route to the DB
      // after that iterate to the next q
  }
  
// firstChoice();

  // function to display the second options of their city trip.
  function secondChoice(){
  var choiceOne = [
    "Purple Pig",
    "Adventurous small plates plus house-cured meats & a lengthy wine list in small, lively quarters.",
    "Address: 500 N Michigan Ave, Chicago, IL 60611"
   ];
   console.log(choiceOne);
   var optionOne = $("#optionOne");
    for(var i=0; i<choiceOne.length;i++){
      var newOption = $("<p>"+choiceOne[i]+"</p>");
      optionOne.append(newOption);
      }
  
  var choiceTwo = [
  "Gibson's Bar",
    "Classic fare comes with a side of people-watching at the original location of the chophouse chain.",
    "Address: 1028 N Rush Ave, Chicago, IL 60611"
   ];
   console.log(choiceTwo);
   var optionTwo = $("#optionTwo");
    for(var i=0; i<choiceTwo.length;i++){
      var newOption = $("<p>"+choiceTwo[i]+"</p>");
      optionTwo.append(newOption);
      }
      
  var choiceThree = [
     "Tempo Cafe",
     "A full menu is served around the clock & it's BYO booze until 10 PM.",
    "Address: 6 E Chestnut St, Chicago, IL 60611"
   ];
   console.log(choiceThree);
   var optionThree = $("#optionThree");
    for(var i=0; i<choiceThree.length;i++){
      var newOption = $("<p>"+choiceThree[i]+"</p>");
      optionThree.append(newOption);
      }
  } 

  function thirdChoice(){
  var choiceOne = [
    "Purple Pig",
    "Adventurous small plates plus house-cured meats & a lengthy wine list in small, lively quarters.",
    "Address: 500 N Michigan Ave, Chicago, IL 60611"
   ];
   console.log(choiceOne);
   var optionOne = $("#optionOne");
    for(var i=0; i<choiceOne.length;i++){
      var newOption = $("<p>"+choiceOne[i]+"</p>");
      optionOne.append(newOption);
      }
  
  var choiceTwo = [
  "Gibson's Bar",
    "Classic fare comes with a side of people-watching at the original location of the chophouse chain.",
    "Address: 1028 N Rush Ave, Chicago, IL 60611"
   ];
   console.log(choiceTwo);
   var optionTwo = $("#optionTwo");
    for(var i=0; i<choiceTwo.length;i++){
      var newOption = $("<p>"+choiceTwo[i]+"</p>");
      optionTwo.append(newOption);
      }
      
  var choiceThree = [
     "Tempo Cafe",
     "A full menu is served around the clock & it's BYO booze until 10 PM.",
    "Address: 6 E Chestnut St, Chicago, IL 60611"
   ];
   console.log(choiceThree);
   var optionThree = $("#optionThree");
    for(var i=0; i<choiceThree.length;i++){
      var newOption = $("<p>"+choiceThree[i]+"</p>");
      optionThree.append(newOption);
      }
  } 
  

// when we hit start tripping we run the yelp NPM package 3 times and only display the first one
$(document).ready(function() {
    

    function doItYelp() {
        // yelp search of Restaurants in City User typed in
       
        let yelpApiKey =
          "PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx";
        // but we get some false positives
        let queryYelpUrl = `https://api.yelp.com/v3/businesses/search?&api_key=${yelpApiKey}&open_now=true`;
        //   we need cors implementation- thanks to TA Michael for the headerParams tip
        const headerParams = {
          Authorization:
            "bearer PQpBSBJotEo3KXypxURXJyK6iMjPU_hnPN6QAkM_KpBz9p1eWO8030JZStfBC979NYecXbi3uWiDlfGYcEuafEXwbI1eSu2lSi2J4RB8JfyX_9bWg-7O6zG_QmqvXHYx"
        };
        // the yelp ajax call
        $.ajax({
          url: queryYelpUrl,
          method: "GET",
          headers: headerParams
        })
          .then(function(response) {
            // the yelpObject and yelpBackup are for presentation contingency that we are having server side errors from yelp
            yelpObject = response;
            // only push to yelpBackup to save a search result in database
            // yelpBackup.push(yelpObject);
            renderYelp(response);
          })
          
        function renderYelp(response) {
          $("body").addClass("second");
          for (var i = 0; i < response.businesses.length; i++) {
            $("#loading-icon").hide();
            $("#results-div").append(`
      
            <div class="card mb-3" style="max-width: 800px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img class="smallImg img-fluid" src="${
                      response.businesses[i].image_url
                    }">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                        <div class="col">
                            <div class="row">
                                <h4 class="card-title">${
                                  response.businesses[i].name
                                }</h4>
                                </div>
                                
                                <div class="row">
                                <div class="card-text">${
                                  response.businesses[i].location.address1
                                }, ${response.businesses[i].location.city}</div>
                            </div>
                            <div class="row">Phone No: ${
                              response.businesses[i].phone
                            }</div>
                            <div class="row food-type">${
                              response.businesses[i].categories[0].title
                            }</div>
                            <div class="row">
                        </div>
                        </div>
                    </div>
                
                    </div>
                </div>
            </div>
            </div>
        `);
            }
          }
        



}
