const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String },
    gender: { type: String },
    products: { type: Array },
    oldPrice: { type: Number },
    newPrice: { type: Number }
});

module.exports = Product = mongoose.model("products", productSchema);