const router = require("express").Router();
const giftRoutes = require("./gifts");
const requestRoutes = require("./requests");
const responseRoutes = require("./responses");

// Gift routes
router.use("/gifts", giftRoutes);

// Response routes
router.use("/requests", requestRoutes);

// Gift routes
router.use("/responses", responseRoutes);


module.exports = router;
