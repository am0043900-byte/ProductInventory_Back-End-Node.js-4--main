require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
