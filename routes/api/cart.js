const express = require('express');
const router = express.Router();
const passport = require('passport');

const cartController = require('../../controllers/cart');
const authenticate = passport.authenticate('jwt',{session: false});

// POST creates new Cart for user with the userId
router.post('/createCart', authenticate, cartController.createNewCart);

// PUT add product to the user Cart
// :id = cartId
router.put('/addProductToCart/:id', authenticate, cartController.addProductToCart);

// PUT remove product from the user Cart
// :id = cartId
router.put('/deleteProductFromCart/:id', authenticate, cartController.deleteProductFromCart);

// PUT remove all products from the user Cart
// :id = cartId
router.put('/deleteAllProducts/:id', authenticate, cartController.deleteAllProductsFromCart);

// GET cart by id
// :id = cartId
router.get('/:id', authenticate, cartController.getCartById);

// GET user cart by status
// @ Status = 0 : user Cart is empty.
// @ Status = 1 : user Cart has products init.
// :id = userId
router.get('/getUserCartStatus/:id', authenticate, cartController.getUserCartStatus);

// PUT change user cart status
// :id = cartId
router.put('/updateCartStatus/:id', authenticate, cartController.updateCartStatus);

// PUT set total price of the user cart
// :id = cartId
router.put('/setCartTotalPrice/:id', cartController.setCartTotalPrice);

module.exports = router;
