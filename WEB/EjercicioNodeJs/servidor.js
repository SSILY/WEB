/*******************************
2
******************************/
const express = require('express');

const aplicacion=express();

/******************************
23
******************************/
/** [INFO QUE CURA]
 *  "Donde colocar las configuraciones de body-parser", le mencione que no importaba, sin embargo se me paso decir que mínimo debía de estar antes del requerimiento del router de usuarios (mi culpa por no especificar eso). 

* Si bien no importa la ubicación respecto al resto de configuraciones del servidor, si importa de esa en específica, ya que al utilizar bodyparser en el router de usuarios debemos de configurarlo antes de requerir. No importa si está antes o después del puerto o de la conexión, importa si está después del requerimiento del router que lo utiliza.
 */
const bodyParser = require('body-parser');
// obtener de un formulario
aplicacion.use(bodyParser.urlencoded({ extended: false }));
// enviar en formato json
aplicacion.use(bodyParser.json());

const puerto=3000;

/*CONEXION A BASE DE DATOS*/
/***************************
17
****************************/
/*
const mongoose =require('mongoose');
const usuario='testUser1';
const password='1uR6UKveIpFjkLkf';
const nombreBD='Negocio';
const uri=`mongodb+srv://${usuario}:${password}@tallerweb.r7lhfku.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Bien...estas conectado a la Base de Datos :D')) 
  .catch(e => console.log('error de conexión', e))
  */

/*OTRA CONEXION A BD*/

const mongoose2 = require('mongoose');
const user = 'testHome';
const pass = 'Jh2F9xsyhjL9fZRI';
const bdName = 'Data';
const uri2 = `mongodb+srv://${user}:${pass}@tallerweb.r7lhfku.mongodb.net/${bdName}?retryWrites=true&w=majority`;

mongoose2.connect(uri2, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('[*] Conexion a la segunda base establecida con exito'))
    .catch(e => console.log('[!] ERROR DE CONEXION', e))


/*TEST*/
/*
const mongoose2 = require('mongoose');
const user = 'zeran';
const pass = '65tqNdCKwwvnQYz9';
const bdName = 'Data';
const uri2 = `mongodb+srv://${user}:${pass}@tallerwebtest.bdcaxyx.mongodb.net/${bdName}?retryWrites=true&w=majority`;

mongoose2.connect(uri2, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('[*] Conexion a la segunda base establecida con exito'))
    .catch(e => console.log('[!] ERROR DE CONEXION', e))
*/
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
    resp.render('index');
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

aplicacion.use('/canciones', require('./router/canciones'));

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
