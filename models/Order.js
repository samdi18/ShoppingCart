const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  orderProducts: [
    {
      pId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  total: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", OrderSchema);
