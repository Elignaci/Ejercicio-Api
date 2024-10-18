//uso de express
const express = require('express')
const app = express()

//recibimos dotenv
require('dotenv').config();

//puerto
const port = process.env.PORT 

//importar conexion a mongoAtlas desde dbConector
const {dbConector}= require('./helper/dbConector')


/* CONFIGURAR VIEWS */
app.use(express.static(__dirname + "/public"));

/* CONFIGURAR TIMELINE ENGINE */
app.set('view engine','ejs');
//app.set('views', __dirname+'/views')

/* CONECTAR DB */
dbConector()

/* MIDDLEWARE */


/* RUTAS */
app.use('/', require('./routers/front-router'))

//uso del error 404
app.use((req,res)=>{
    res.status(404).render({
        titulo:'error 404'
    })
})

//el puerto a la escucha
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})