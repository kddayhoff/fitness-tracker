const db = require("../models");

module.exports = function (app) {

//creates a new workout
app.post("/workouts", (req,res) => {
  db.Workout.create({})
   .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});
//get all workouts
app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => { 
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  //updates a previously created workout
app.put("/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(
    {_id: req.params.id}, 
      {$push: {exercises: body}}, 
      {new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
  });
//gets all workouts within the last 7 days to show up for the graphs
app.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};
