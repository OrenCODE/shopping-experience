const express = require('express');
const router = express.Router();
const passport = require('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session: false});
const adminCheck = require("../../middleware/adminAuthCheck");

// GET all orders from the database
// Admin Route
router.get('/orders', adminCheck, orderController.getOrders);

// GET the amount of orders in the database
router.get('/ordersLength', orderController.getOrdersLength);

// POST
// Create new Order while checking if the delivery date is available
router.post('/createNewOrder', authenticate , orderController.createNewOrder);

// GET All fully booked dates
router.get('/getFullyBookedDates', authenticate ,orderController.getFullyBookedDates);

// GET The latest order by userId
router.get('/getLatestOrderByUserId/:id', authenticate, orderController.getLatestOrderByUserId);

module.exports = router;
