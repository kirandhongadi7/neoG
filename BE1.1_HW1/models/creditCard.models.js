const mongoose = require("mongoose")

const creditCard = new mongoose.Schema({
cardName: String,
id: String,
expireData: String,
name: String,
logo: URL
})

const CreditCard = mongoose.model("CreditCard", creditCard)

module.exports = CreditCard