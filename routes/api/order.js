const express = require('express');
const router = express.Router();
const passport = require('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session: false});

// Gets all orders in the system
router.get('/orders', orderController.getOrders);

// Creates new Order while checking if the delivery date is available
router.post('/createNewOrder', authenticate , orderController.createNewOrder);

// Gets All fully booked dates
router.get('/getFullyBookedDates', authenticate ,orderController.getFullyBookedDates);

module.exports = router;
