const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoGiftSchema = new Schema({
  "name": { type: String, required: true },
  "max price": { type: Number, required: true },
  "Image": {type:mongoose.SchemaTypes.Url, required:true},
  "Link": {type:mongoose.SchemaTypes.Url, required:true},
  "RandomSample": {type:String, required: true},
  "Entry": {type: Number, required: true},

},
  { collection: "autogifts" }
);

module.exports = mongoose.model("autogifts", autoGiftSchema);
