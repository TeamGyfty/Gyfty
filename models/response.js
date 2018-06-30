const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Resquests = require("./request")

const requestSchema = new Schema({
  
  "name": { type: String, required: true },
  "title": { type: String, required: true }
  "description": { type: String, required: true },
  "imageURL": { type: String, required: true },
  "link": { type: String, required: true },
  "request": { type: Schema.Types.ObjectId, ref: "Requests"}
},
  { collection: "requests" }
);

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
