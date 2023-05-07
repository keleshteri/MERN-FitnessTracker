const express = require('express');
const {createWorkout,getWorkouts,getWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController');
const router = express.Router();

/**
 * routes for workouts
 */

//GET all workouts
router.get('/', getWorkouts);
//Get a single workout
router.get('/:id', getWorkout);
/**
 * POST a new workout
 */
router.post('/', createWorkout);

//PUT a new workout
router.patch('/:id', updateWorkout);

//DELETE a new workout
router.delete('/:id', deleteWorkout);

module.exports = router;