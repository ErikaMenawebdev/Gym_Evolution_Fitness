const Inscripcion = require("../models/inscripcion");

// Obtener o consultar todas las inscripciones registradas.

const index = (req, res, next) => {

    Inscripcion.find()

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al consultar las inscripciones registradas",
                error
            });
        });

};

// Consultar la inscripcion por la cédula del cliente

const show = (req, res, next) => {

   Inscripcion.find({ cedula: req.body.cedula })

    .then (response => {
        res.json(
            {response}
        );
    })
    .catch (error => {
         res.status(500).json(
            {message: ` Ocurrio un error al consultar esta inscripcion`, error}
        );
    });
};

// Guardar una inscripción

const guardar = (req, res, next) => {

    let inscripcion = new Inscripcion(

        {
            cedula: req.body.cedula,
            idPlan: req.body.idPlan,
            idPago: req.body.idPago,
            fechaInscripcion: req.body.fechaInscripcion,
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin,
            estado: req.body.estado
        });

        inscripcion.save()

        .then (response => {
            res.json(
                {response}
            );
        })

        .catch (error => {
           res.status(500).json(
                {message:`Ocurrio un error al guardar la inscripcion`, error}
            );
        });    
};

// Actualizar una inscripción por la cédula del cliente

const actualizar = (req, res, next) => {

    let cedula = req.body.cedula;

    let datos = {
        cedula: req.body.cedula,
        idPlan: req.body.idPlan,
        idPago: req.body.idPago,
        fechaInscripcion: req.body.fechaInscripcion,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        estado: req.body.estado
    };

    Inscripcion.findOneAndUpdate(
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
            message: "Ocurrió un error al actualizar la inscripción",
            error
        });
    });

};

// Eliminar una inscripción por la cédula del cliente

const eliminar = (req, res, next) => {

    let cedula = req.body.cedula;

    Inscripcion.findOneAndDelete({ cedula: cedula })

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al eliminar la inscripción",
                error
            });
        });

};

module.exports = {
    index, show, guardar, actualizar, eliminar
};

