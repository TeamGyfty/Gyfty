const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
  occasion: { type: String, required: true}
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
