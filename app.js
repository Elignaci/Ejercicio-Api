//uso de express
const express = require('express')


//recibimos dotenv
require('dotenv').config();

//uso de cors
const cors = require('cors')

//puerto
const app = express()
const port = process.env.PORT 

//importar conexion a mongoAtlas desde dbConector
const {dbConector}= require('./helper/dbConector')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

/* CONFIGURAR VIEWS */
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