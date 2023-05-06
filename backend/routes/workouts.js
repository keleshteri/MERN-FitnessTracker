const express = require('express');

const router = express.Router();

/**
 * routes for workouts
 */

//GET all workouts
router.get('/', (req, res) => {
    res.json({ Message: 'GET all Workouts' });
});
//Get a single workout
router.get('/:id', (req, res) => {
    res.json({ Message: 'GET a single Workout' });
});
//POST a new workout
router.post('/', (req, res) => {
    res.json({ Message: 'POST a new Workout' });
});

//PUT a new workout
router.patch('/:id', (req, res) => {
    res.json({ Message: 'UPDATE a new Workout' });
});

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({ Message: 'DELETE a new Workout' });
});

module.exports = router;