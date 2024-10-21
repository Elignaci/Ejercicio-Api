/**uso de express
 * en el hacemos un require para declara express
 */

const express = require('express')

/**recibimos dotenv
 * en el hacemos un require para declara dotenev
 */

require('dotenv').config();

//uso de cors
const cors = require('cors')

/**desde aqui se hace el enlace a la aplicacion donde vamos a ejecuatar la api(en este caso Mongo Atlas)
 * El nombre de port es el 3000 y esta referenciado desde .env.
 * dnConector importar conexion a mongoAtlas desde dbConector
 */
const app = express()
const port = process.env.PORT 
const {dbConector}= require('./helper/dbConector')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

/* CONFIGURAR VIEWS */
/**Es el enlace publico para conectar mediante express con una api esterna
 * 
 */
app.use(express.static(__dirname + "/public"));

/* CONFIGURAR TIMELINE ENGINE */
app.set('view engine','ejs');
//app.set('views', __dirname+'/views')

/* CORS */
app.use(cors())

/* CONECTAR DB */
dbConector()

/* MIDDLEWARE */
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

/* RUTAS */
/**api/v1 debe estar enlace para conectar con la api desde postman 
 */
app.use('/api/v1', require('./routers/front-router'))

//uso del error 404
app.use((req,res)=>{
    res.status(404).render({
        titulo:'error 404'
    })
})


/* LISTENER */
//el puerto a la escucha
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})