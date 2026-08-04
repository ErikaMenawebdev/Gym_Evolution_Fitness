const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteController");

router.get("/", clienteController.index);
router.post("/show", clienteController.show);
router.post("/guardar", clienteController.guardar);
router.put("/actualizar", clienteController.actualizar);
router.delete("/eliminar", clienteController.eliminar);

module.exports = router;