const Validator = require('validator');
const isEmpty = require('./is-empty');
const isCreditCard = require('../middleware/isCreditCard');

module.exports = function validateOrder(data) {
    let errors = {};

    data.street = !isEmpty(data.street) ? data.street : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.deliveryDate = !isEmpty(data.deliveryDate) ? data.deliveryDate : '';
    data.creditCard = !isEmpty(data.creditCard) ? data.creditCard : '';

    // Street Validation

    if (Validator.isEmpty(data.street)) {
        errors.street = 'Street field is required';
    }

    // City Validation

    if (Validator.isEmpty(data.city)) {
        errors.city = 'City field is required';
    }

    // ShippingDate Validation

    if (Validator.isEmpty(data.deliveryDate)) {
        errors.deliveryDate = 'Delivery date is required';
    }

    // CreditCard Validation

    if (!isCreditCard(data.creditCard)) {
        errors.creditCard = 'Credit card is invalid';
    }

    if (Validator.isEmpty(data.creditCard)) {
        errors.creditCard = 'credit card is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
