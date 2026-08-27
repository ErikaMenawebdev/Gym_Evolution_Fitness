const Pagos = require("../models/pagos");

// Obtener o consultar todos los pagos registrados.

const index = (req, res, next) => {

    Pagos.find()

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al consultar los pagos registrados",
                error
            });
        });

};

// Consultar el pago por la cedula del cliente

const show = (req, res, next) => {

   Pagos.find({ cedula: req.body.cedula })

    .then (response => {
        res.json(
            {response}
        );
    })
    .catch (error => {
         res.status(500).json(
            {message: ` Ocurrio un error al consultar el pago`, error}
        );
    });
};

// Guardar un pago

const guardar = (req, res, next) => {

    let pago = new Pagos(

        {
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            valor: req.body.valor,
            metodoPago: req.body.metodoPago
            
        });

        pago.save()

        .then (response => {
            res.json(
                {response}
            );
        })

        .catch (error => {
           res.status(500).json(
                {message:`Ocurrio un error al guardar el pago`, error}
            );
        });    
};

// Actualizar un pago por id del pago

const actualizar = (req, res, next) => {

    let id = req.body.id;

    let datos = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        valor: req.body.valor,
        metodoPago: req.body.metodoPago
    };

    Pagos.findByIdAndUpdate(
        id,
        { $set: datos },
        { returnDocument: "after" }
    )

    .then(response => {
        res.json({
            response
        });
    })

    .catch(error => {
        res.status(500).json({
            message: "Ocurrió un error al actualizar el pago",
            error
        });
    });

};


// Eliminar un pago por id del pago

const eliminar = (req, res, next) => {

    let id = req.body.id;

    Pagos.findByIdAndDelete(id)

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al eliminar el pago",
                error
            });
        });

};

module.exports = {
    index, show, guardar, actualizar, eliminar
};

