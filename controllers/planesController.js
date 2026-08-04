const Planes = require("../models/planes");

// Obtener o consultar todos los planes registrados.

const index = (req, res, next) => {

    Planes.find()

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al consultar los planes registrados",
                error
            });
        });

};

// Consultar el plan por el id del plan

const show = (req, res, next) => {

    let idPlan = req.body.id;

    Planes.findById(idPlan)

    .then(response => {
        res.json({
            response
        });
    })

    .catch(error => {
        res.status(500).json({
            message: "Ocurrió un error al consultar el plan",
            error
        });
    });

};

// Guardar un plan

const guardar = (req, res, next) => {

    let plan = new Planes(

        {
            nombre: req.body.nombre,
            duracionDias: req.body.duracionDias,
            precio: req.body.precio
            
        });

        plan.save()

        .then (response => {
            res.json(
                {response}
            );
        })

        .catch (error => {
           res.status(500).json(
                {message:`Ocurrio un error al guardar el plan`, error}
            );
        });    
};

// Actualizar un plan por el id del plan

const actualizar = (req, res, next) => {

     let idPlan = req.body.id;

    let datos = {
        nombre: req.body.nombre,
        duracionDias: req.body.duracionDias,
        precio: req.body.precio
    };

    Planes.findByIdAndUpdate(
        idPlan ,
        { $set: datos }
    )

    .then(response => {
        res.json({
            response
        });
    })

    .catch(error => {
        res.status(500).json({
            message: "Ocurrió un error al actualizar el plan",
            error
        });
    });

};

// Eliminar un plan por el id del plan

const eliminar = (req, res, next) => {

    let idPlan = req.body.id;

    Planes.findByIdAndDelete(idPlan)

        .then(response => {
            res.json({
                response
            });
        })

        .catch(error => {
            res.status(500).json({
                message: "Ocurrió un error al eliminar el plan",
                error
            });
        });

};

module.exports = {
    index, show, guardar, actualizar, eliminar
};