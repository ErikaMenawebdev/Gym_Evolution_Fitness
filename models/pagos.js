const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PagosSchema = new Schema({
    
    cedula: {
        type: String,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    metodoPago: {
        type: String,
        required: true
    }

},{ timestamps: true });

const Pagos = mongoose.model("Pagos", PagosSchema);

module.exports = Pagos;