const db = require("../models");

// defining methods for responses

module.exports = {

  
  create: function(req, res) {
	db.Responses
	  .create({ name: req.body.name, title: req.body.title, description: req.body.description, imageURl: req.body.imageURl, request: req.params.id })
	  .then(dbModel => res.json(dbModel))
	  .catch(err => res.status(422).json(err))
	},

};