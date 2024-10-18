//importamos a express
const express = require('express')

//guardamos en la clase ruter de la objeto express
const  router = express.Router()

const {getIndex, getServices, getProductos }=require ('../controllers/front-controllers');


/* get index */
router.get('/',getIndex)

/* get users */
router.get('/servicios',getServices)

/*get products*/
router.get('/productos',getProductos);


module.exports = router;