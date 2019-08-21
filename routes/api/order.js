const express = require('express');
const router = express.Router();
const passport = require('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session: false});

// Gets the user address
// :id = userId
router.get('/userShippingDetails/:id', authenticate, orderController.getUserShippingDetails);

// Gets all orders in the system
router.get('/orders', orderController.getOrders);

// Creates new Order while checking if the delivery date is available
router.post('/createNewOrder', authenticate, orderController.createNewOrder);

// create here the receipt routes

module.exports = router;