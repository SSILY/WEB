/*******************************
1
******************************/

const http = require('http');

const servidor = http.createServer((req,resp)=>{
  resp.end('Esto es una respuesta a tu solicitud')
 });

 const puerto =3000;

servidor.listen(puerto,()=>{
  console.log("Servidor escuchando solicitudes")
});

/*************
Error
************/
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy -List

/*******************************
2
******************************/

const express = require('express');

const aplicacion=express();

const puerto=3000;

aplicacion.get('/',(req,resp)=>{
  resp.send('Página de inicio')
});

aplicacion.listen(puerto,()=>{
  console.log('Escuchando las peticiones :D. Desde el puerto',puerto)
});


/*******************************
3
******************************/

aplicacion.use(express.static(__dirname+'/public'));


/*******************************
4
******************************/
aplicacion.get('/contacto',(req,resp)=>{
resp.sendFile(__dirname+'/public/contacto.html')
});


/*******************************
5
******************************/
aplicacion.use((req,resp,next)=>{
  resp.status(404).sendFile(__dirname+'/public/404.html')
});


/*******************************
6
******************************/
aplicacion.set('view engine','ejs');
aplicacion.set('views',__dirname+'/views');


/*******************************
7
******************************/
aplicacion.get('/contacto',(req,resp)=>{
  resp.render('contacto')
});

aplicacion.use((req,resp,next)=>{
  resp.status(404).render('404')
});

/*******************************
8
******************************/
aplicacion.get('/contacto',(req,resp)=>{
  resp.render('contacto',{
    usuario:"nombre",
    apellido:"apellido"
  })
});

/*******************************
9
******************************/
aplicacion.use((req,resp,next)=>{
  resp.status(404).render('404',{
    usuario:"nombre",
    apellido:"apellido"
  })
});

/*******************************
10
******************************/
<%- include('template/cabecera')%>

/*******************************
11
******************************/
<%- include('template/cabecera',{tituloPagina:'Contacto'})%>
  
/*******************************
12
******************************/
<%- include('template/cabecera',{tituloPagina:'Error'})%>

/*******************************
13
******************************/
const express = require('express');
const router = express.Router();

router.get('/contacto',(req,resp)=>{
  resp.render('contacto',{
    usuario:"nombre",
    apellido:"apellido"
  })
});

module.exports = router;


/*******************************
14
******************************/
aplicacion.use('/',require('./router/rutasPagina'));



/*******************************
15
******************************/

router.get('/usuarios',(req,res)=>{
  res.render('usuarios',{
    arregloUsuarios: [
      {nombre:'Gaby',apellido:'Garcia'},
      {nombre:'Cristina',apellido:'Rivera'}
    ]
  })
});

/***************************
17
****************************/
const mongoose =require('mongoose');
const usuario='usuario';
const password='contraseña';
const nombreBD='nombreBD';
const uri=`mongodb+srv://${usuario}:${password}@cluster0.jda5zwj.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Bien...estas conectado a la Base de Datos :D')) 
  .catch(e => console.log('error de conexión', e))

/***************************
18
****************************/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:String,
    apellido:String
});

const Usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = Usuario;

/***************************
19
****************************/
const Usuario = require('../models/usuario');

/***************************
20
****************************/
router.get('/usuarios',async(req,res)=>{
    try{
        const arregloUsuariosDB=await Usuario.find();
        res.render('usuarios',{
            arregloUsuarios: arregloUsuariosDB
        })
    }catch(error){
        console.log(error);
    }
    
});

