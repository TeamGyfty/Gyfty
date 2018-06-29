
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  "name": { type: String, required: true },
  "age": { type: Number, required: true },
  "price": { type: Number, required: true },
  "occasion": { type: String, required: true}
  // "createdAt": { type: Date, default: Date.now },
  // "updatedAt": { type: Date, default: Date.now }

},
  { collection: "requests" }
);

module.exports = mongoose.model("Request", requestSchema)
