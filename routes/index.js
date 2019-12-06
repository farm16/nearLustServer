const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes starting from "/api"
router.use("/api/v1", apiRoutes);

module.exports = router;
