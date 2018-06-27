const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// matches with "/api/requests"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

// matches with "/api/books/:id"
router.route("/:id")
  .get(requestsController.findById)
  .delete(requestsController.remove);

module.exports = router;