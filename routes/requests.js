const router = require("express").Router();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const requests = require("../models/Requests.js");
const responses = require("../models/Response.js");



// GET for all requests
 router.get("/requests", (req, res) => {
 	requests.find()
 	  .then(results => {
 		  res.json(results)
 	  })
 	  .catch(err => {
 		res.json(err)
 	  })
  })


 // GET for specific request
 router.get("/request/:_id", (req, res) => {
 	requests.findOne({ "_id": req.params.id })
 	.populate("responses") 
 	.then(results => {
 		res.json(results)
 	})
 	.catch(err => {
 		res.json(err)
 	})
 })

 // POST for posting a request 
  router.post("/requests/new", (req, res) => {
  	// create a new request and pass the req.body to the entry
  	let newRequest = new Request({
  		"name": req.body.name,
      "title": req.body.title,
  		"age": req.body.age,
  		"price": req.body.price,
  		"occasion": req.body.occasion
  	});
  	console.log("new request")
  	// save note to db
  	requests.create(newRequest)
  	  .then(results => res.json(results))
  	  .catch(err => {
  	  	res.json(err);
  	  })
  })

// REMOVE for deleting a request
  router.delete("/requests/delete/:id", (req, res) => {
  	if (req.params.id) {
  		requests
  		  .remove({_id: req.params.id})
  		  .then(result => res.json(result))
  		  .catch(err => res.json(err));
  	}
  })

module.exports = router;














