const Validator = require('validator');
const isEmpty = require('./is-empty');
const isCreditCard = require('../middleware/isCreditCard');

module.exports = function validateOrder(data) {
    let errors = {};

    data.street = !isEmpty(data.street) ? data.street : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.deliveryDate = !isEmpty(data.deliveryDate) ? data.deliveryDate : '';
    data.creditCard = !isEmpty(data.creditCard) ? data.creditCard : '';
    data.cardName = !isEmpty(data.cardName) ? data.cardName : '';
    data.cvv = !isEmpty(data.cvv) ? data.cvv : '';

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
        errors.creditCard = 'Credit card is required';
    }

    // Card Name Validation

    if (!Validator.isLength(data.cardName, {min: 2, max: 60})) {
        errors.cardName = 'Please insert a valid card name';
    }

    if(!data.cardName.match(/^[a-zA-Z ]+$/)){
        errors.cardName = 'Please insert characters only'
    }

    if (Validator.isEmpty(data.cardName)) {
        errors.cardName = 'Card Name field is required';
    }

    // Cvv Validation

    if (!Validator.isLength(data.cvv, {min: 3, max: 4})) {
        errors.cvv = 'CVV number is not valid, should be 3-4 digits';
    }

    if (Validator.isEmpty(data.cvv)) {
        errors.cvv = 'CVV field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
