const Usuarios = require("../models/usuarios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const guardar = async (req, res, next) => {

    try {

        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const usuario = new Usuarios({
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: passwordHash
        });

        const response = await usuario.save();

        res.json({
            response
        });

    } catch (error) {

        res.status(500).json({
            message: "Ocurrió un error al guardar el usuario",
            error
        });

    }
};

const login = async (req, res, next) => {

    try {

        const usuario = await Usuarios.findOne({
            correo: req.body.correo
        });

        if (!usuario) {
            return res.status(404).json({
                message: "El usuario no existe"
            });
        }

        const passwordCorrecta = await bcrypt.compare(
            req.body.password,
            usuario.password
        );

        if (!passwordCorrecta) {
            return res.status(401).json({
                message: "Contraseña incorrecta"
            });
        }

        const token = jwt.sign(
    {
        id: usuario._id,
        correo: usuario.correo
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "2h"
    }
);

        res.json({
            message: "Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });

    } catch (error) {

        res.status(500).json({
            message: "Ocurrió un error al iniciar sesión",
            error
        });

    }
};

module.exports = {
    guardar,
    login
};