const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  firstname:String,
  lastname: String,
  birthdate:{
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin:{
    type:Boolean,
    default: false
  },
  profilePictureUrl:{
    type: String
  }


},
{
    timestamps: true
})

const UserProfile = mongoose.model("UserProfile", userProfileSchema)
module.exports = UserProfile
