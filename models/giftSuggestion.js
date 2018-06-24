const mongoose = require ("mongoose");
const mongoosetypeurl = require('mongoose-type-url');
const Schema = mongoose.Schema;

const giftSuggestionSchema = new Schema ({
    Name: { type: String, required: true },
    Description: { type:String, required: true},
    Price: {type: Number, required: true},
    Delivery_Days: {type: Number, required: true},
    Image_Link: {type:mongoose.SchemaTypes.Url, required:true},//this will be the link to this person ig profile
    Gift_requestCreated: {type: Date, default: Date.now},
});

const giftSuggestion = mongoose.model("giftSuggestion", giftSuggestionSchema);

module.exports = giftSuggestion;

