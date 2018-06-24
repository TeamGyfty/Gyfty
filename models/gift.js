const mongoose = require ("mongoose");
const mongoosetypeurl = require('mongoose-type-url');
const Schema = mongoose.Schema;

const giftSchema = new Schema ({
    Occassion: { type: String, required: true },
    Price_Range: {type: Number, required: true},
    Age: {type: String, required: true},
    Potential_Gift: {type: String, required: true},
    Hobbies: {type: String, requried: true},
    Favorite_color: {type: String, required: true},
    Favorite_food: { type: String, required: true},
    Drinker: {type: Boolean, default: false},
    Tell_us_more: { type: String, required: true}, 
    Instagram: {type:mongoose.SchemaTypes.Url, required:true},//this will be the link to this person
    Gift_requestCreated: {type: Date, default: Date.now},
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;

