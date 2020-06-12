const db = require("../models");
const router = require("express").Router();
module.exports = function (app) {

//creates a new workout
router.post("/api/workouts", (req,res) => {
  db.Workout.create({})
   .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});
//get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => { 
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  //updates a previously created workout
router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(
      {_id: req.params.id}, 
      {$push: {exercises: body}}, 
      {new: true})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
  });
//gets all workouts within the last 7 days to show up for the graphs
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};
