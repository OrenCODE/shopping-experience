const express = require('express');
const router = express.Router();

const productController = require('../../controllers/product');
const adminCheck = require("../../middleware/adminAuthCheck");

// Gets Array of products from the database
router.get('/products', productController.getProducts);

// Get product by id
router.get('/productById/:id', productController.getProductById);

// Creates new Product: Admin
router.post('/createNewProduct', adminCheck , productController.createNewProduct);

// Gets products by categoryId
router.get('/productsByCategory/:id', productController.getProductsByCategory);

// Gets product/s by onType Search
router.get('/search', productController.searchProduct);

module.exports = router;
