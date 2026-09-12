const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
  
    },

    username: {
      type: String,
      required: true,
      unique: true,
    
    },

    bio: {
      type: String,
      trim: true,
    },

    profilePicUrl: {
      type: String,
    
    },

    followingCount: {
      type: Number,
      default: 0,
    },

    followerCount: {
      type: Number,
      default: 0,
    },

    companyName: {
      type: String,
    
    },

    location: {
      type: String,
     
    },

    portfolioUrl: {
      type: String,
     
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User