const express = require('express');
const router = express.Router();
const passport = require('passport');

const productController = require('../../controllers/product');
const authenticate = passport.authenticate('jwt',{session: false});

// Gets products from the database
router.get('/products', productController.getAllProducts);

// Creates new Product: Admin
router.post('/createNewProduct', authenticate, productController.createNewProduct);

// Gets products by categoryId
router.get('/productsByCategory/:id', productController.getProductsByCategory);

// Gets a product by productName //FIX THIS ROUTE//
router.get('/productByName/:name', productController.getProductByName);

module.exports = router;
