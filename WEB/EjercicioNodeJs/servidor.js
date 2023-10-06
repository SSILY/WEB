/*******************************
2
******************************/

const express = require('express');

const aplicacion=express();

const puerto=3000;

/*******************************
6
******************************/
aplicacion.set('view engine','ejs');
aplicacion.set('views',__dirname+'/views');

aplicacion.get('/', (req,resp) => {
    resp.send('Página de inicio')
});

/*******************************
7
******************************/
/*aplicacion.get('/contacto',(req,resp)=>{
    resp.render('contacto')
});*/
/*******************************
8
******************************/
aplicacion.get('/contacto',(req,resp)=>{
    resp.render('contacto',{
        usuario:"Daniel",
        apellido:"Gutierrez"
    })
});

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
    })
  });

/*LAS PETICIONES SE COLOCAN ANTES QUE EL SERVIDOR ESCUCHE*/

aplicacion.listen(puerto, () => {
    console.log('Escuchando las peticiones :D. Desde el puerto',puerto)
});

/*******************************
3
******************************/
aplicacion.use(express.static(__dirname+'/public'));
