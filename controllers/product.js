const Product = require('../models/Product');

exports.createNewProduct = (req, res) => {
    const product = new Product({
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        imageURL: req.body.imageURL,
    });
    product.save()
        .then(product => res.status(200).json({
            msg: "product saved successfully",
            product: product
        }))
        .catch(err => console.log(err));
};

exports.getProducts = (req, res) => {
    Product.find()
        .sort({categoryId: 1})
        .then(allProducts => res.status(200).json(allProducts))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.getProductsByCategory = (req, res) => {
    Product.find({categoryId: req.params.id})
        .then(productsByCategory => res.status(200).json(productsByCategory))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                msg: "could not fetch products"
            })
        })
};

exports.searchProduct = (req, res, next) => {
    Product.find({"name": {$regex: RegExp(req.query.name)}})
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                msg: "something went wrong"
            })
        })
};

exports.getProductById = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({
                msg: "product not found"
            })
        })
};

exports.editProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Product.findOne({_id: req.params.id})
                .then((product) => {
                    res.json(product)

                }).catch(err => {
                console.error(err);
                res.status(500).send(err)
            })
        })
};
