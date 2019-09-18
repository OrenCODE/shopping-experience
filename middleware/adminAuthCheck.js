const jwt = require('jsonwebtoken');
const passport = require('../config/passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (user.isAdmin) {
            return next();
        } else {
            res.status(401).json({message: 'permission error'});
        }
    })(req, res, next);
};
