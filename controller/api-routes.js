var db = require("../models");
// User Authentication Routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome to Passport with Sequelize");
  });
  app.listen(5000, function(err) {
    if (!err) console.log("Site is live");
    else console.log(err);
  });
};
