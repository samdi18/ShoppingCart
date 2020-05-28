const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// @route     GET api/products
// @desc      Get all the products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//to add the data source of products using postman in the mongoDb database

router.post("/", async (req, res) => {
  const { name, price, productQty } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      productQty,
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
