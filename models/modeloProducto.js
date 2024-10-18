const { Schema, model } =require("mongoose") 

const productoSchema = new Schema({

    nombre: {
        type: String,
        required: true

    },
    disponible: {
        type: String,
        required: true

    },
    descripcion: {
        type: String,
        required: true

    }
})
module.exports = model('productos',productoSchema )