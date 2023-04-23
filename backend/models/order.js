const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    _id: String,
    productId: String,
    price: Number,
    quantity: Number,
    userId: String,
    createdDate: Date
});

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;