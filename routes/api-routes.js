var connection = require("../config/connection");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM city_trippin_db.landmarks_chicago";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
};