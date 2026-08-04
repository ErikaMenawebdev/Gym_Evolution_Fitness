const Clientes = require("../models/cliente");


// Obtener o consultar todos los clientes registrados.

const index = (req, res, next) => {

    Clientes.find()

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al consultar los clientes",
                error
            });
        });

};

// Consultar un cliente por la cédula

const show = (req, res, next) => {
    let cedula = req.body.cedula
    Clientes.findOne ({cedula: cedula})
    .then (response => {
        res.json(
            {response}
        );
    })
    .catch (error => {
         res.status(500).json(
            {message: ` Ocurrio un error al consultar este cliente`, error}
        );
    });
};

// Guardar un cliente

const guardar = (req, res, next) => {

    let cliente = new Clientes(

        {
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            sexo: req.body.sexo,
            telefono: req.body.telefono,
            correo: req.body.correo,
            ciudad: req.body.ciudad
        });

        cliente.save()

        .then (response => {
            res.json(
                {response}
            );
        })

        .catch(error => {
    console.log(error);

    res.status(500).json({
        message: "Ocurrió un error al guardar el cliente",
        error
    });
});
};


// Actualizar un cliente

const actualizar = (req, res, next) => {

    let cedula = req.body.cedula;

    let datos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        correo: req.body.correo,
        ciudad: req.body.ciudad
    };

    Clientes.findOneAndUpdate(
        { cedula: cedula },
        { $set: datos }
    )

    .then(response => {
        res.json({
            response
        });
    })

    .catch(error => {
        res.status(500).json({
            message: "Ocurrió un error al actualizar el cliente",
            error
        });
    });

};

// Eliminar un cliente

const eliminar = (req, res, next) => {

    let cedula = req.body.cedula;

    Clientes.findOneAndDelete({ cedula: cedula })

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al eliminar el cliente",
                error
            });
        });

};

module.exports = { 
    index, show, guardar, actualizar, eliminar
};

