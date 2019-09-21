const express = require('express');
const router = express.Router();

const productController = require('../../controllers/product');
const adminCheck = require("../../middleware/adminAuthCheck");

// Get Array of products from the database
router.get('/products', productController.getProducts);

// Get product by id
router.get('/productById/:id', productController.getProductById);

// Get products by categoryId
router.get('/productsByCategory/:id', productController.getProductsByCategory);

// Get products by onType Search
router.get('/search', productController.searchProduct);

// Creates new product: Admin
router.post('/createNewProduct', adminCheck , productController.createNewProduct);

// Edit product by productId: Admin
router.put('/editProductById/:id', adminCheck , productController.editProduct);

module.exports = router;
