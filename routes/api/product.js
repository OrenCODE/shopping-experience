const express = require('express');
const router = express.Router();

const productController = require('../../controllers/product');
const adminCheck = require("../../middleware/adminAuthCheck");

// GET Array of products from the database
router.get('/products', productController.getProducts);

// GET product by id
// :id = productId
router.get('/productById/:id', productController.getProductById);

// GET products by categoryId
// :id = categoryId
router.get('/productsByCategory/:id', productController.getProductsByCategory);

// GET products by onType Search
router.get('/search', productController.searchProduct);

// POST
// Creates new product: Admin Route
router.post('/createNewProduct', adminCheck , productController.createNewProduct);

// PUT
// Edit product by productId: Admin Route
// :id = productId
router.put('/editProductById/:id', adminCheck , productController.editProduct);

// GET the amount of products under 5$
router.get('/getCheapProducts', productController.getCheapProductLength);

module.exports = router;
