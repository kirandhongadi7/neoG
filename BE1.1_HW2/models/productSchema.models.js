const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    discountPercentage: {
      type: Number,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },

    ratingsCount: {
      type: Number,
      default: 0,
    },

    reviewsCount: {
      type: Number,
      default: 0,
    },

    offers: {
      type: [String],
    },

    variant: {
      type: String,
    },

    wifiConnectivity: {
      type: Boolean,
      default: false,
    },

    warranty: {
      type: String,
    },

    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;