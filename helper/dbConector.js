//conexion a base de datos utilizando mongoose
const mongoose = require('mongoose')

//funcion que nos da conexion a mongoo Atlas
const dbConector = async () => {

    try {
        const conexion = await mongoose.connect(process.env.URI_CONNECT)
        console.log('ESTOY CONECTADO A MONGOOSE')
        return conexion
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: 'No se ha podido conectar'

        }
    }
}
module.exports={dbConector}