
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
        type: {
          type: String,
          trim:true,
        },

        name: {
          type: String,
          trim: true,
          required: "Enter the name of your exercise"
        },

        duration: { 
          type: Number,
          required: "Enter length of workout"
        },

        weight:{ 
          type: Number,
          required: "Enter weight for workout"
        },

        reps: {
          type: Number,
          required: "Enter the amount of reps"
        },

        sets: {
           type: Number,
           required: "Enter the amount of sets"
        }
      }
    ]
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;