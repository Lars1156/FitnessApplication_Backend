const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const trainerController = require('../Controller/trainerController');
const adminController = require('../Controller/adminController');
const contactController = require('../Controller/contactController');
const workoutController = require('../Controller/workoutController');
const bookingController = require('../Controller/bookingController');
// const authMiddleware = require('../middleware/auth');
const reviewController =require('../Controller/reviewController');

//User Auth Api

router.post('/registerUser', userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/deleteUser/:id', userController.deleteUser);

// Trainer API

router.post('/registerTrainer', trainerController.registerTrainer);
router.post('/loginTrainer', trainerController.loginTrainer);
router.get('/getAllTrainer', trainerController.getAllTrainers);

// Admin  Api
router.post('/registerAdmin', adminController.registerAdmin);
router.post('/loginAdmin' , adminController.loginAdmin);

// contact us
router.post('/contactUs', contactController.contactUs);
router.get('/getAllContacts' , contactController.getAllContacts);
// Review APIs
router.post('/addReview', reviewController.addReview)
router.get('/getAllReview', reviewController.getAllReview)
// Trainer BookingApi,
router.post('/bookingTrainer', bookingController.bookTrainer );
router.get('/getUserBooking/:userId' , bookingController.getUserBookings)

// Workout Controller
router.post ('/addWorkout' , workoutController.addWorkout)

module.exports = router;