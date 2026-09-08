const mongoose = require("mongoose")

const productCard = new mongoose.Schema({
    productImg: URL,
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