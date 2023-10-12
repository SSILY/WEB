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
resp.render('contacto');
});

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

module.exports = router;
