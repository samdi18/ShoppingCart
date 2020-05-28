const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// @route     GET api/order
// @desc      Get all orders history from the API
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/order
// @desc      Adds order to the database
router.post("/", async (req, res) => {
  const { orderProducts, total } = req.body;

  try {
    const newOrder = new Order({
      orderProducts,
      total,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
