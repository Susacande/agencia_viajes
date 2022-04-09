//const express = require('express');
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"

import dotenv from 'dotenv'
dotenv.config({path:'variables.env'}) 


const app = express();


//Conectar BD
db.authenticate()
    .then( ()=> console.log('BD connected success'))
    .catch( error => console.log(error));




//Habilitar PUG
app.set('view engine', 'pug');

//Agregar body parse para leer datos del formulario
app.use(express.urlencoded({extended:true}));


//Obtener año actual
app.use( (req,res, next) =>{
    const year = new Date();
     res.locals.actualYear= year.getFullYear();
     res.locals.nombreSitio="Agencia de viajes"
     console.log(res.locals);
    return next();
})

//Definir carpeta pública
app.use(express.static('public'));

//Configuramos el host dinámico
const host = process.env.HOST || '0.0.0.0';

//Obtener el puerto asignado por el server
const port = process.env.PORT ||4000;

//Agregar router
app.use('/', router);

app.listen(port,host, ()=>{
    console.log(`El servidor esta funcionando en el host: ${host}: puerto ${port}`)
})


