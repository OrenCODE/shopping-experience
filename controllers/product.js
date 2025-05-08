const Product = require('../models/Product');

exports.createNewProduct = (req, res) => {
    const product = new Product({
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        imageURL: req.body.imageURL,
    });
    product.save()
        .then(product => res.status(200).json(product))
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

exports.getCheapProductLength = (req, res) => {
    Product.find({price: {$lt : 5}})
        .then(products => res.status(200).json(products.length))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.updateProductImage = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ msg: 'Product not found' });
            }
            if (!req.file) {
                return res.status(400).json({ msg: 'No image file provided' });
            }
            product.imageURL = `/uploads/${req.file.filename}`;
            return product.save();
        })
        .then(updatedProduct => {
            if (updatedProduct) {
                res.json(updatedProduct);
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Server error');
        });
};
