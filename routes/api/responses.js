const router = require("express").Router();
const responsesController = require("../../controllers/responsesController");

// matches with "/api/requests/:id"
router.route("/:id")
  .post(responsesController.create);



module.exports = router;