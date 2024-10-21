const { Schema, model } = require("mongoose")

//aqui se esta definiendo el esquema del modelo de servicios
const servicioSchema = new Schema({

    nombre: {
        type: String,
        required: true

    },
    descripcion: {
        type: String,
        required: true

    },
    disponible: {
        type: Boolean,
        required: true

    }

    

})
module.exports = model('servicio', servicioSchema)

