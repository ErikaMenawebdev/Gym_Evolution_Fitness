const mongoose = require (`mongoose`)
const Schema = mongoose.Schema;

const PlanesSchema = new Schema({
    nombre:{ 
        type: String,
        required: true
    },

    duracionDias:{ 
        type: Number,
        required: true
    },

    precio:{ 
        type: Number,
        required: true
    } 
    }, {timestamps: true})
    
    const Planes = mongoose.model(`Planes`, PlanesSchema)
    module.exports = Planes;

    