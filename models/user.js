var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newUser = new Schema({
  'name': { type: String, require: true },
  'password': { type: Password, require: true },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

