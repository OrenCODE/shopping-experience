const express = require('express');
const router = express.Router();
const passport = require('passport');

const cartController = require('../../controllers/cart');

// Creates new Cart for user with the userId
router.post('/createCart',
    passport.authenticate('jwt', {session:false}),
    cartController.createNewCart);

// Add Product to the user Cart
// :id = cartId
router.put('/addProductToCart/:id',
    passport.authenticate('jwt', {session:false}),
    cartController.addProductToCart);

// Delete Product from the user Cart
// :id = cartId
router.put('/deleteProduct/:id',
    passport.authenticate('jwt', {session:false}),
    cartController.deleteProductFromCart);

// Delete all products from the user Cart
// :id = cartId
router.put('/deleteAllProducts/:id',
    passport.authenticate('jwt', {session:false}),
    cartController.deleteAllProductsFromCart);


module.exports = router;
