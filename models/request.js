
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Responses = require("./response")

const requestSchema = new Schema({
  
  "name": { type: String, required: true },
  "title": { type: String, required: true }
  "age": { type: Number, required: true },
  "price": { type: Number, required: true },
  "occasion": { type: String, required: true },
  "response_id": { type: Schema.Types.ObjectId, ref: "Responses"}
},
  { collection: "requests" }
);

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
