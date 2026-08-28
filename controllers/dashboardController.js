const Clientes = require("../models/cliente");
const Planes = require("../models/planes");
const Inscripcion = require("../models/inscripcion");
const Pagos = require("../models/pagos");

// Obtener los indicadores principales del Dashboard

const index = async (req, res, next) => {

    try {

        const totalClientes = await Clientes.countDocuments();

        const totalPlanes = await Planes.countDocuments();

        const totalInscripciones = await Inscripcion.countDocuments();

        const totalPagos = await Pagos.countDocuments();

        // Calcular ingresos totales

        const resultadoIngresos = await Pagos.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$valor" }
                }
            }
        ]);

        const ingresosTotales = resultadoIngresos[0]?.total || 0;


        // Contar inscripciones activas

        const inscripcionesActivas = await Inscripcion.countDocuments({
            estado: "Activa"
        });


        // Calcular ingresos del mes actual

        const ahora = new Date();

        const inicioMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            1
        );

        const inicioSiguienteMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth() + 1,
            1
        );


        const resultadoIngresosMensuales = await Pagos.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: inicioMes,
                        $lt: inicioSiguienteMes
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$valor" }
                }
            }
        ]);

        const ingresosMensuales =
            resultadoIngresosMensuales[0]?.total || 0;


        res.json({
            totalClientes,
            totalPlanes,
            totalInscripciones,
            totalPagos,
            ingresosTotales,
            inscripcionesActivas,
            ingresosMensuales
        });

    } catch (error) {

        res.status(500).json({
            message: "Ocurrió un error al consultar los indicadores del Dashboard",
            error
        });

    }

};

module.exports = {
    index
};