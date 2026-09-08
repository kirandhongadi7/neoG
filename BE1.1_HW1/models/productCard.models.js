const mongoose = require("mongoose")

const productCard = new mongoose.Schema({
    productImg: String,
    productInfo: String,
    start: Number,
    ratings: {
        type:Number,
        max: 10,
        min: 0,
        default: 0
    },
    review: Number,
    price: Number,
    mrpPrice: Number,
    discount: Number,
    deliveryType: String,
    offer: String,
    total: Number,
    description: String,

})

const Product =  mongoose.model("Product",productCard)

module.exports = Product