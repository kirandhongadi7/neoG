const mongoose = require("mongoose")

const productCard =new mongoose.Schema({
 name: String,
 isNew: Boolean,
 type: String,
 info: String,
 color: {
    type: [String]
 },
 size:{
    type: [Number]
 },
 price: Number,
})

const ProductCard = mongoose.model("ProductCard",productCard)

module.exports = ProductCard