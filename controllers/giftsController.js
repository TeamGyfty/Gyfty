const db = require("../models");

// defining models for the giftsController
module.exports = {
  findAll: function(req, res) {
  	db.Gift
	  .find({ age: req.params.age, price: req.params.price, occasion: req.params.occasion})
	  .then(dbModel => res.json(dbModel))
	  .catch(err => res.status(422).json(err))
  },

}