const mongoose = require("mongoose");

const basketSchema = new mongoose.Schema({
    _id: String,
    productId: String,
    price: Number,
    quantity: Number,
    userId: String
});

const Basket = mongoose.model("Basket",basketSchema);
module.exports = Basket;