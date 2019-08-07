const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema =  new Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        default: 0,
    },

    products:[{
        name: {type: String},
        quantity: {type: Number},
        price: {type: Number},
        image: {type: String}
    }]
});

module.exports = Cart = mongoose.model('carts', CartSchema);
