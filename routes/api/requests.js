// const router = require("express").Router();
// const requestsController = require("../../controllers/requestsController");

// // matches with "/api/requests"
// router.route("/")
//   .get(requestsController.findAll)
//   .post(requestsController.create);

// // matches with "/api/books/:id"
// router.route("/:id")
//   .get(requestsController.findById)
//   .delete(requestsController.remove);

// module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const models = require()