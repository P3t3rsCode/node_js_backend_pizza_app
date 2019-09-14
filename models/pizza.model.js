const mongoose = require("mongoose");

var PizzaSchema = new mongoose.Schema({
  name: String,
  src: String,
  amount: Number
});

const pizza_collection = mongoose.model("pizza_collection", PizzaSchema);

module.exports = pizza_collection;
