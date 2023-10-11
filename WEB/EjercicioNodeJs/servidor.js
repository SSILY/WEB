/*******************************
2
******************************/

const express = require('express');

const aplicacion=express();

const puerto=3000;

/*CONEXION A BASE DE DATOS*/
/***************************
17
****************************/
const mongoose =require('mongoose');
const usuario='testUser1';
const password='1uR6UKveIpFjkLkf';
const nombreBD='Negocio';
const uri=`mongodb+srv://${usuario}:${password}@tallerweb.r7lhfku.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Bien...estas conectado a la Base de Datos :D')) 
  .catch(e => console.log('error de conexión', e))


/*STATIC ROUTES*/
/*******************************
6
******************************/
aplicacion.set('view engine','ejs');
aplicacion.set('views',__dirname+'/views');
/*******************************
3
******************************/
aplicacion.use(express.static(__dirname+'/public'));

aplicacion.get('/', (req,resp) => {
    resp.send('Página de inicio')
});

/*Para usar el router*/
/*******************************
14
******************************/
aplicacion.use('/',require('./router/rutasPagina'));

/******************************
22
******************************/
aplicacion.use('/usuarios',require('./router/usuarios'));

/******************************
23
******************************/
const bodyParser = require('body-parser');
// obtener de un formulario
aplicacion.use(bodyParser.urlencoded({ extended: false }));
// enviar en formato json
aplicacion.use(bodyParser.json());

/*******************************
7
******************************/
/*aplicacion.get('/contacto',(req,resp)=>{
    resp.render('contacto')
});*/
/*******************************
8
******************************/
/*
aplicacion.get('/contacto',(req,resp)=>{
    resp.render('contacto',{
        usuario:"Daniel",
        apellido:"Gutierrez"
    })
});*/

/*******************************
4
******************************/
/*aplicacion.get('/contacto',(req,resp)=>{
    resp.sendFile(__dirname+'/public/contacto.html')
    });*/

/*******************************
5
******************************/
/*aplicacion.use((req,resp,next)=>{
    resp.status(404).sendFile(__dirname+'/public/404.html')
});*/

/******7********/
/*aplicacion.use((req,resp,next)=>{
    resp.status(404).render('404')
});*/
/*******************************
9
******************************/
aplicacion.use((req,resp,next)=>{
    resp.status(404).render('404',{
        usuario:"Daniel",
        apellido:"Gutiérrez"
    });
});




/*LAS PETICIONES SE COLOCAN ANTES QUE EL SERVIDOR ESCUCHE*/

aplicacion.listen(puerto, () => {
    console.log('Escuchando las peticiones :D. Desde el puerto',puerto)
});



