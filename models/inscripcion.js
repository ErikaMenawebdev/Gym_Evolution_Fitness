const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InscripcionSchema = new Schema({
    
    cedula:{ 
        type: String,
        required: true
    },

    idPlan: {
    type: Schema.Types.ObjectId,
    ref: "Planes",
    required: true
},

    idPago: {
    type: Schema.Types.ObjectId,
    ref: "Pagos",
    required: true
    },

    fechaInscripcion:{ 
        type: Date,
        required: true
    },

    fechaInicio:{ 
        type: Date,
        required: true
    },

    fechaFin:{ 
        type: Date,
        required: true
    },

    estado:{ 
        type: String,
        required: true
    }

}, { timestamps: true });

const Inscripcion = mongoose.model("Inscripcion", InscripcionSchema);

module.exports = Inscripcion;