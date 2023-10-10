/***************************
19
****************************/
const Usuario = require('../models/usuario');

/*******************************
13
******************************/
const express = require('express');
const router = express.Router();

router.get('/contacto', (req, resp) => {
resp.render('contacto',{
    usuario:"Daniel",
    apellido:"Gutierrez"
  })
});

module.exports = router;

/*******************************
15
******************************/
/*router.get('/usuarios',(req,res)=>{
    res.render('usuarios',{
        arregloUsuarios: [
            {nombre:'Daniel',apellido:'Gutierrez'},
            {nombre:'Alma',apellido:'Sánchez'}
        ]
    })
});*/

/***************************
20
****************************/
router.get('/usuarios', async(req, res) => {
    try{
        const arregloUsuariosDB = await Usuario.find();
        res.render('usuarios',{
            arregloUsuarios: arregloUsuariosDB
        })
    }catch(error){
        console.log(error);
    }
    
});
