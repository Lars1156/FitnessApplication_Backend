const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: String,
    duration: Number,
    caloriesBurned: Number,
    date: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
