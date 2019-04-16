var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

require("./controller/api-routes.js")(app);
require("./controller/html-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
// whatever
