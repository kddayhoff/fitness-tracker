const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
  });
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
  });

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

  
  db.Workout.create({ name: "Workout" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });



// Start the serve
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});