const Product = require("../models/productsModel");

module.exports.getAllProducts = async (req, res, next) => {
  Product.find().then(result => {
    res.send(result);
  });
};

module.exports.createNewProduct = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    gender: req.body.gender,
    products: req.body.products,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice
  });
  await product.save().then(result => Product.find())
    .then(result => { res.send(result) });
}