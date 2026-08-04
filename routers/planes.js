const express = require("express");
const router = express.Router();

const planesController = require("../controllers/planesController");

router.get("/", planesController.index);
router.post("/show", planesController.show);
router.post("/guardar", planesController.guardar);
router.put("/actualizar", planesController.actualizar);
router.delete("/eliminar", planesController.eliminar);

module.exports = router;