const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const requests = require("../models/requests.js");
const response = require("../models/response.js");
const user = require("../models/user.js");

// POST for creating a new user
router.post("/requests/response/:request_id", (req, res) => {
	// create a new response and pass the req.body to the entry
	response.create({ "name": req.body.name, "password": req.body.password, "email": req.body.email }).then(results => {
		res.json(results);
	})
	.catch(err => {
		res.json(err);
	})
});

module.exports = router;