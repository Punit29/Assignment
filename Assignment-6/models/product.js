const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: String
});

const productSchema = new Schema({
    productName: String,
    description: String,
    price: Number,
    category: [categorySchema]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;