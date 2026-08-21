const Inscripcion = require("../models/inscripcion");
const Planes = require("../models/planes");

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

const guardar = async (req, res, next) => {

    try {

        // Buscar el plan seleccionado
        const plan = await Planes.findById(req.body.idPlan);

        if (!plan) {
            return res.status(404).json({
                message: "El plan seleccionado no existe"
            });
        }

        // Crear la fecha de inicio
        const fechaInicio = new Date(req.body.fechaInicio);

        // Calcular la fecha de finalización
        const fechaFin = new Date(fechaInicio);
        fechaFin.setDate(fechaFin.getDate() + plan.duracionDias);

        // Crear la inscripción
        const inscripcion = new Inscripcion({
            cedula: req.body.cedula,
            idPlan: req.body.idPlan,
            idPago: req.body.idPago,
            fechaInscripcion: req.body.fechaInscripcion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            estado: req.body.estado
        });

        const response = await inscripcion.save();

        res.json({
            response
        });

    } catch (error) {

        res.status(500).json({
            message: "Ocurrió un error al guardar la inscripción",
            error
        });

    }

};

// Actualizar una inscripción por el _id de la inscripción

const actualizar = async (req, res, next) => {

    try {

        const id = req.body.id;

        // Buscar el plan seleccionado
        const plan = await Planes.findById(req.body.idPlan);

        if (!plan) {
            return res.status(404).json({
                message: "El plan seleccionado no existe"
            });
        }

        // Crear la fecha de inicio
        const fechaInicio = new Date(req.body.fechaInicio);

        // Calcular nuevamente la fecha de vencimiento
        const fechaFin = new Date(fechaInicio);
        fechaFin.setDate(fechaFin.getDate() + plan.duracionDias);

        const datos = {
            cedula: req.body.cedula,
            idPlan: req.body.idPlan,
            idPago: req.body.idPago,
            fechaInscripcion: req.body.fechaInscripcion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            estado: req.body.estado
        };

        const response = await Inscripcion.findByIdAndUpdate(
            id,
            { $set: datos },
            { new: true }
        );

        if (!response) {
            return res.status(404).json({
                message: "La inscripción no existe"
            });
        }

        res.json({
            response
        });

    } catch (error) {

        res.status(500).json({
            message: "Ocurrió un error al actualizar la inscripción",
            error
        });

    }

};

// Eliminar una inscripción por el _id de la inscripción

const eliminar = (req, res, next) => {

    const id = req.body.id;

    Inscripcion.findByIdAndDelete(id)

        .then(response => {

            if (!response) {
                return res.status(404).json({
                    message: "La inscripción no existe"
                });
            }

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

