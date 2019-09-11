const express = require('express');
const router = express.Router();
const passport = require('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session: false});

// Gets all orders in the system
router.get('/orders', orderController.getOrders);

// Creates new Order while checking if the delivery date is available
router.post('/createNewOrder', authenticate, orderController.createNewOrder);

router.get('/getFullyBookedDates',authenticate,orderController.getFullyBookedDates);

// Gets the user address
// :id = userId
// router.get('/userShippingDetails/:id', authenticate, orderController.getUserShippingDetails);
// create here the receipt routes

module.exports = router;
