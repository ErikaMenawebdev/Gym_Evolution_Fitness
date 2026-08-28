const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const autenticar = require("../middleware/autenticar");

router.use(autenticar);

router.get("/", dashboardController.index);

module.exports = router;