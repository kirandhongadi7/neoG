const mongoose = require("mongoose")

const playerProfileSchema = new mongoose.Schema({
 username: {
    type: String,
    required: true
 },
 email:{
    type: String,
    required: true
 },
 firstname: {
    type: String,

 },
 lastname:{
    type:String,
 },
 age:Number,
 gender: {
    type:String,
    enum: ["Male","Female","Other"]
 },
 country: String,
 isActive:{
    type:Boolean,
    default: true
 },
 gamePlayed: {
    type:Number
 },
 level: {
    type: String,
    enum:['Beginner', 'Intermediate', 'Advanced', 'Expert']
 },
 preferredGame:{
    type:String,
 },

},{
    timestamps: true
})

const PlayerProfile = mongoose.model("PlayerProfile", playerProfileSchema)
module.exports = PlayerProfile