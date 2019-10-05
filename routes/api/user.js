const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user');

// POST
// Checks if a user exist in the database
router.post('/registerCheck', userController.checkUserCredentials);

// POST
// Registers a new user
router.post('/register', userController.createUser);

// POST
// Login user and return its current token and payload
router.post('/login', userController.userLogin);

module.exports = router;
