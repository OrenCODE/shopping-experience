const Cart = require("../models/Cart");

exports.createNewCart = (req, res) => {
    const cart = new Cart({
        userId: req.body.userId,
        date: new Date(),
        status: true
    });
    cart.save()
        .then(cart => {
            res.status(200).json({
                msg: 'Cart Created',
                cart: cart
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: 'Cart creation error'
            })
        })
};

exports.saveProductToCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.body.cartId}, {
        $push: {
            products: {
                name: req.body.name,
                quantity: req.body.quantity,
                price: req.body.price,
                imageURL: req.body.imageURL
            }
        }
    }, {new: true})
        .then(() => {
            Cart.findOne({_id: req.body.cartId})
        })
        .then(cart => {
            res.json(cart)
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
};
