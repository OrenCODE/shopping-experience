const Product = require('../models/Product');


exports.createNewProduct = (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        imageURL: req.body.imageURL,
    });
    product.save()
        .then(product => res.status(200).json({
            msg: "product saved successfully",
            product: product
        }))
        .catch(err => console.log(err));
};

exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.status(200).json({
            msg: "products fetched",
            products: allProducts
        }))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.getProductsByCategory = (req, res) => {
    Product.find({category: req.params.id})
        .then(productsByCategory => res.status(200).json({
            msg: "products fetched",
            products: productsByCategory
        }))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.getProductByName = (req,res) => {
    Product.find({name: req.params.name})
        .then(productByName => res.status(200).json({
            msg: "product found",
            product: productByName
            }))
        .catch(err => res.status(500).json({
            msg: "could not find product name"
        }))
};


