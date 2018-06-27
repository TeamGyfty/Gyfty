const db = require("../models");

// defining methods for request

module.exports = {
  findAll: function(req, res) {
  	console.log("finding all requests posted")
	db.Requests
	  .find({})
	  .populate("responses")
	  .then(dbModel => res.json(dbModel))
	  .catch(err => res.status(422).json(err));
  },
  
  create: function(req, res) {
	db.Requests
	  .create({ name: req.body.name, age: req.body.age, price: req.body.price, occasion: req.body.occasion  })
	  .then(dbModel => res.json(dbModel))
	  .catch(err => res.status(422).json(err))
	},

   remove: function(req, res) {
	db.Requests
      .findById({ _id: req.params.id })
	  .then(dbModel => dbModel.remove())
	  .then(dbModel => res.json(dbModel))
	  .catch(err => res.status(422).json(err));
	}
};