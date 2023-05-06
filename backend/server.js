require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')


/**
 * Express App 
  ***/
const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
/**
 * routes
 */
app.use('/api/workouts', workoutRoutes);

/**
 * connect to db   
 */
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        //when db is available

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db && listening on port 4000!!!');
        });

    })
    .catch((error) => {
        console.log(error);
    });

