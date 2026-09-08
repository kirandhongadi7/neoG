const mongoose = require("mongoose")

const grapeCard = new mongoose.Schema({
    image: URL,
    like: URL,
    name: String,
    info: String,
    calories: Number,
    carbohydrates: Number,
    protein: Number,
    fat:Number,
})

const GrapeCard = mongoose.model("GrapeCard",grapeCard)

module.exports = GrapeCard