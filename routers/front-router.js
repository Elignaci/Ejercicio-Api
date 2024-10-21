/**Importacion de express, validacion y de las rutas 
 * guardamos en la clase ruter de la objeto express
 */
//Importacion desde express
const express = require('express')
const { check } = require('express-validator')
const { validaInputs } = require('../middlewares/validacion')

const router = express.Router()

/**Ruta donde se hace el requerimeinto de todas las categorias que se van a ejecutar desde el postman
 * p
 * 
 */
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
/**
 * @param {Object}router es el acceso donde vamos a pasar la informacion a postman usando metodos Get,Post, Put y delete
 * @param {exports} validaInputs es el accesoo que activamos desde validacion para confirmar que todos los check se cumplen
 * @param {validacion}check se usa para activar la validacion de cada metodo por medio de express-validator
 */

/* Leer todos los servicios */
router.get('/servicios', getServices)

/* Leer un servicio por su id */
router.get('/servicios/:id', getServicesByid)

/* Crear un servicio */
router.post('/servicios', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el servicio esta disponible').not().isEmpty(),
    validaInputs
], createServicio)


/* Editar un servicio por us id */
router.put('/servicios/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el servicio esta disponible').not().isEmpty(),
    validaInputs
], updateServicioById)

/* Eliminar un servicio por su id */
router.delete('/servicios/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el servicio esta disponible').not().isEmpty(),
    validaInputs 
], deleteServicioById)


/* PRODUCTOS */
/* Leer todos los productos */
router.get('/productos', getProductos);

/* Leer un producto por su id */
router.get('/productos/:id', getProductosByid)

/* Crear un producto */
router.post('/productos', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el producto esta disponible').not().isEmpty(),
    validaInputs
], createProducto)

/* Editar un producto por us id */
router.put('/productos/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el producto esta disponible').not().isEmpty(),
    validaInputs
], updateProductoById)

/* Eliminar un producto por su id */
router.delete('/productos/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    check('disponible', 'pon si el producto esta disponible').not().isEmpty(),
    validaInputs
],deleteProductosById)

module.exports = router;