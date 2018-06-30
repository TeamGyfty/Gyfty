const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const requests = require("../models/Requests.js");
const response = require("../models/Response.js");

// POST for posting response to a request
router.post("/requests/response/:request_id", (req, res) => {
	// create a new response and pass the req.body to the entry
	response.create({ "name": req.body.name, 
					  "title": req.body.title, 
					  "description": req.body.description, 
					  "imageURL": req.body.imageURL, 
					  "link": req.body.link,
					  "request": req.params.id 
					})
	.then(results => {
		res.json(results);
	})
	.catch(err => {
		res.json(err);
	})
});

module.exports = router;