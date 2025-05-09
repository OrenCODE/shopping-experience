const express = require('express');
const router = express.Router();

const categoryController = require('../../controllers/category');
const adminCheck = require("../../middleware/adminAuthCheck");

// GET all categories from the database
router.get('/categories', categoryController.getCategories);

// POST
// Create new Category: Admin Route
router.post('/createNewCategory', adminCheck, categoryController.createNewCategory);


module.exports = router;
