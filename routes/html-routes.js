var path = require("path");

// Routes
// =============================================================

module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home page, index.html; 
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  // /exercise leads to page where user inputs their workouts
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });

  // /stats shows a user all of their workout stats
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });
}