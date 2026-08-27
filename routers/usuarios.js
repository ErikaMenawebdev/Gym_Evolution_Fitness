const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.post("/guardar", usuariosController.guardar);
router.post("/login", usuariosController.login);

module.exports = router;