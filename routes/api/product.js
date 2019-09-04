const express = require('express');
const router = express.Router();
const passport = require('passport');

const productController = require('../../controllers/product');
const authenticate = passport.authenticate('jwt',{session: false});

// Gets Array of products from the database
router.get('/products', productController.getProducts);

// Gets all products as objects
router.get('/productsAsObjects', productController.getProductsAsObjects);

// Get product by id
router.get('/productById/:id', productController.getProductById);

// Creates new Product: Admin
router.post('/createNewProduct', authenticate, productController.createNewProduct);

// Gets products by categoryId
router.get('/productsByCategory/:id', productController.getProductsByCategory);

// Gets product/s by onType Search
router.get('/search', productController.searchProduct);

module.exports = router;
