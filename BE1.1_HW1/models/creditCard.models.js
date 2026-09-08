const mongoose = require("mongoose")

const creditCard = new mongoose.Schema({
cardName: String,
cardNumber: String,
expiryData: String,
name: String,
logo: String
})

const CreditCard = mongoose.model("CreditCard", creditCard)

module.exports = CreditCard