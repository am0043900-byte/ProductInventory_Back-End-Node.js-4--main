const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// POST  Create Product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      data: product,
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already find",
      });
    }

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});


// GET  Filtering using req.query
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(req.query);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// DELETE  Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;
