const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateUserCredentialsInput = require('../validation/userCredentials');
const validateUserRegistration = require('../validation/userDetails');
const validateLoginInput = require('../validation/login');

const keys = require('../config/keys');
const User = require('../models/User');

exports.checkUserCredentials = (req, res) => {
    const {errors, isValid} = validateUserCredentialsInput(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const userEmail = req.body.email.toLowerCase();

    User.findOne({email: userEmail}).then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        }
    }).then(() => {
        User.findOne({identityNumber: req.body.identityNumber}).then(user => {
            if (user) {
                errors.identityNumber = 'ID already exists';
                return res.status(400).json(errors);
            } else {
                res.status(200).json({
                    userChecked: true
                })
            }
        })
    });
};

exports.createUser = (req, res) => {
    const {errors, isValid} = validateUserRegistration(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    } else {
        const {identityNumber, email, password, firstName, lastName, city, street} = req.body;

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            identityNumber: identityNumber,
            password: password,
            city: city,
            street: street
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => res.json(err))
            })
        })
    }
};

exports.userLogin = (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({email}).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check Password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    // User Matched
                    const payload = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        isAdmin: user.isAdmin
                    }; // Create JWT Payload

                    // Sign Token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 3600},
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });
                } else {
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            })
    })
};
