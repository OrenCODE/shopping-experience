const Cart = require("../models/Cart");

exports.createNewCart = (req, res) => {
    const cart = new Cart({
        userId: req.body.userId,
        date: new Date(),
        status: 1
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

exports.addProductToCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, {
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
            Cart.findOne({_id: req.params.id})
                .then((cart) => {
                    res.json(cart)
                })
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
};

exports.deleteProductFromCart = (req, res) => {
    Cart.updateOne({_id: req.params.id},
        {$pull: {
                products: {$elemMatch: {_id: req.body.productId}}
            }
        },
        {safe: true, multi: true})
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
};

exports.deleteAllProductsFromCart = (req,res) => {
    Cart.updateOne({_id: req.params.id}, {products: []},
        {safe: true, multi: true})
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
};

// add here two more functions

// A : GET user cart with it's current status
// B : GET user cart by cartId
