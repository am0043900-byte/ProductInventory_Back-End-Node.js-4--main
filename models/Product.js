const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  category: {
    type: String,
    required: [true, "Please enter category"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  email: { // Bonus unique field
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
