const mongoose = require (`mongoose`)
const Schema = mongoose.Schema;

const ClientesSchema = new Schema({
    
    cedula:{ 
        type: String,
        required: true,
         unique: true
    },

    nombre:{ 
        type: String,
        required: true
    },

    apellido:{ 
        type: String,
        required: true
    },

    fechaNacimiento:{
        type: Date,
        required: true
    },

    sexo:{ 
        type: String,
        required: true
    },

    telefono:{ 
        type: String,
        required: true
    },

    correo:{ 
        type: String,
        required: true
    },

    ciudad:{ 
        type: String,
        required: true
    }
}, {timestamps: true})

const Clientes = mongoose.model(`Clientes`, ClientesSchema)
module.exports = Clientes;




