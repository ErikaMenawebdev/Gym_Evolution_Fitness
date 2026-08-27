const express = require("express");
const router = express.Router();
const inscripcionController = require("../controllers/inscripcionController");
const autenticar = require("../middleware/autenticar");

router.use(autenticar);
router.get("/", inscripcionController.index);
router.post("/show", inscripcionController.show);
router.post("/guardar", inscripcionController.guardar);
router.put("/actualizar", inscripcionController.actualizar);
router.delete("/eliminar", inscripcionController.eliminar);

module.exports = router;
