const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');
//get all the workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({});
    res.status(200).json(workout);
};

//get a workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        res.status(404).json({ error: 'Not such workout' });
    }

    res.status(200).json(workout);
};
//create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    //add doc on  db
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
//update a workout
const updateWorkout = async (req, res) => {
    // const { title, load, reps } = req.body;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) {
        res.status(404).json({ error: 'Not such workout' });
    }
    res.status(200).json(workout);
};

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        res.status(400).json({ error: 'Not such workout' });
    }
    res.status(200).json(workout);
};


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};