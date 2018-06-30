
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  "name": { type: String, required: true },
  "age": { type: Number, required: true },
  "max price": { type: Number, required: true },
  "occasion": { type: String, required: true},
  "receipent": { type: Date, required: true },
  "hobbies": {type: String, requried: true},
  "favorite color": {type: String, required: true},
  "favorite food": { type: String, required: true},
  "Drinker" : {type: Boolean, default: false},
  "Tell us more": { type: String, required: true}, 
  "Instagram": {type:mongoose.SchemaTypes.Url, required:true},//this will be the link to this person ig profile
  "Gift Request Created": {type: Date, default: Date.now},
  // "createdAt": { type: Date, default: Date.now },
  // "updatedAt": { type: Date, default: Date.now }

},
  { collection: "requests" }
);

module.exports = mongoose.model("Request", requestSchema)
