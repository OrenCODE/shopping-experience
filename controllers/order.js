const parseDate = require('../middleware/parseDate');
const validateOrder = require('../validation/order');

const Order = require('../models/Order');
const User = require('../models/User');
const Cart = require('../models/Cart');

// exports.getUserShippingDetails = (req, res) => {
//     User.findOne({_id: req.params.id})
//         .then(user => {
//             if (!user) {
//                 return res.status(400).json({
//                     msg: 'User not found'
//                 })
//             } else {
//                 return res.status(200).json({
//                     city: user.city,
//                     street: user.street
//                 })
//             }
//         })
// };

exports.createNewOrder = (req, res) => {
    const {errors, isValid} = validateOrder(req.body);
    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    const {userId, cartId, totalPrice, city, street, deliveryDate, creditCard} = req.body;
    Order.find({deliveryDate: deliveryDate})
        .then(orders => {
            // check if the same delivery date exist more than 3 times
            if (orders.length >= 3) {
                return res.status(400).json({
                    msg: "all deliveries are taken for this date"
                })
            } else {
                const creditCardEnd = creditCard.slice(12,17);
                const newOrder = new Order({
                    userId: userId,
                    cartId: cartId,
                    totalPrice: totalPrice,
                    city: city,
                    street: street,
                    orderDate: new Date(),
                    deliveryDate: deliveryDate,
                    creditCard: creditCardEnd
                });
                newOrder.save()
                    .then(() => {
                        // Change cart status to closed = 2
                        updateCartStatus(req);
                    })
                    .then(order => res.status(200).json({
                        msg: "success",
                        order: order
                    }))
                    .catch(err => console.log(err))
            }
        });
};

const updateCartStatus = (req, res) => {
    Cart.findOneAndUpdate(
        { _id: req.body.cartId },
        { $set: { isOpen: 2 } },
        { new: true },
        (err, result) => {
            if (err) {
                console.log(err);
            }
        });
};


exports.getOrders = (req, res) => {
    Order.find({})
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({
            msg: "could not find any orders"
        }))
};

// create receipt functions here
