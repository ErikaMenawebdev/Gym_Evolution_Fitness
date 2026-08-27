const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const autenticar = require("../middleware/autenticar");

router.use(autenticar);
router.get("/", autenticar,clienteController.index);
router.post("/show", clienteController.show);
router.post("/guardar", clienteController.guardar);
router.put("/actualizar", clienteController.actualizar);
router.delete("/eliminar", clienteController.eliminar);

module.exports = router;