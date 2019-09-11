const validateOrder = require('../validation/order');

const Order = require('../models/Order');
const OrderDates = require('../models/OrderDates');
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
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const {deliveryDate} = req.body;
    Order.find({deliveryDate: deliveryDate})
        .then(orders => {
            // check if the same delivery date exist more than 3 times
            if (orders.length >= 3) {
                return res.status(400).json({
                    msg: "all deliveries are taken for this date"
                })
            }
            if (orders.length === 2) {
                newOrder(req);
                setFullyBookedDate(req);
                deleteClosedCart(req);
                return res.status(202).json({
                    success: "order created"
                })
            } else {
                newOrder(req);
                deleteClosedCart(req);
                res.status(200).json({
                    success: "order created"
                })
            }
        });
};

const setFullyBookedDate = (req) => {
    const fullyBookedDate = new OrderDates({
        date: req.body.deliveryDate
    });
    fullyBookedDate.save();
};

const deleteClosedCart = (req) => {
    Cart.findById(req.body.cartId)
        .then(cart =>
            cart.remove())
        .catch(err => console.log(err))
};

const newOrder = (req) => {
    const {userId, cartId, totalPrice, city, street, deliveryDate, creditCard, products} = req.body;
    const creditCardEnd = creditCard.slice(12, 16);
    const newOrder = new Order({
        userId: userId,
        cartId: cartId,
        totalPrice: totalPrice,
        city: city,
        street: street,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        creditCard: creditCardEnd,
        products: products
    });
    newOrder.save()
};


exports.getOrders = (req, res) => {
    Order.find({})
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({
            msg: "could not find any orders"
        }))
};

exports.getFullyBookedDates = (req,res) => {
    OrderDates.find({})
        .then(dates => {
            return res.status(200).json(dates)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: 'something went wrong'
            })
        })
};


// create receipt functions here
