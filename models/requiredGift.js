const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredGiftSchema = new mongoose.Schema({
    Occassion: { type: String, required: true },
    Price_Range: {type: Number, required: true},
    Age: {type: String, required: true},
    date: {type: Date, default: Date.now}
},
    {collection:"requiredGift"}
);

const requiredGiftdata = mongoose.model("requiredGiftdata", requiredGiftSchema);

module.exports = requiredGiftdata; 