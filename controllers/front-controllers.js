//Importamos modelo de servicios y productos en forma variables
const servicio = require('../models/modeloServicio.js');
const producto = require('../models/modeloProducto.js');

/* funciones controladoras que reciben requerimeinto y respuesta para establecer la ruta de donde se va a visualizar la pagina*/
const getIndex = (req, res) => {
    res.render('index', {
        descripcion: 'Indice del la pagina'
    })
}

/* funciones controladoras que reciben requerimeinto y respuesta donde se va a visualizar en la pagina dentro de un try/catch tanto servicios */
const getServices = async (req, res) => {
    try {
        const servicios = await servicio.find()
        //console.log(servicios)
        res.render('servicios', {
            descripcion: 'descripcion de servicios',
            servicios
        })
    } catch (error) {

    }
}
/* funciones controladoras que reciben requerimeinto y respuesta donde se va a visualizar en la pagina dentro de un try/catch tanto productos */
const getProductos = async (req, res) => {
    try {
        const productos = await producto.find()
        //console.log(productos)
        res.render('productos', {
            descripcion: 'descripcion de productos',
            productos
        })
    } catch (error) {

    }
}
module.exports = {
    getIndex,
    getServices,
    getProductos
}