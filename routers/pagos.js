const express = require("express");
const router = express.Router();
const pagosController = require("../controllers/pagosController");
const autenticar = require("../middleware/autenticar");

router.use(autenticar);
router.get("/", pagosController.index);
router.post("/show", pagosController.show);
router.post("/guardar", pagosController.guardar);
router.put("/actualizar", pagosController.actualizar);
router.delete("/eliminar", pagosController.eliminar);

module.exports = router;