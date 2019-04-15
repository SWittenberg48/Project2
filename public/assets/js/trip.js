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