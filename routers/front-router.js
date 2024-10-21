//importamos a express
const express = require('express')
//guardamos en la clase ruter de la objeto express
const router = express.Router()

const {
    getIndex,
    getServices,
    getServicesByid,
    createServicio,
    updateServicioById,
    deleteServicioById,
    getProductos,
    getProductosByid,
    createProducto,
    updateProductoById,
    deleteProductosById,
} = require('../controllers/front-controllers');

/* get index */
router.get('/', getIndex)



/* SERVICIOS */
/* Leer todos los servicios */
router.get('/servicios', getServices)

/* Leer un servicio por su id */
router.get('/servicios/:id', getServicesByid)

/* Crear un servicio */
router.post('/servicios', createServicio)

/* Editar un servicio por us id */
router.put('/servicios/:id', updateServicioById)

/* Eliminar un servicio por su id */
router.delete('/servicios/:id', deleteServicioById)


/* PRODUCTOS */
/* Leer todos los productos */
router.get('/productos', getProductos);

/* Leer un producto por su id */
router.get('/productos/:id', getProductosByid)

/* Crear un producto */
router.post('/productos', createProducto)

/* Editar un producto por us id */
router.put('/productos/:id', updateProductoById)

/* Eliminar un producto por su id */
router.delete('/productos/:id', deleteProductosById)

module.exports = router;