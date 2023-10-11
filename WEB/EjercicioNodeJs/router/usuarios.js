/******************************
21
******************************/
const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

router.get('/',async(req,res)=>{
    try{
        const arregloUsuariosDB=await Usuario.find();
        res.render('usuarios',{
            arregloUsuarios: arregloUsuariosDB
        })
    }catch(error){
        console.log(error);
    }
    
});

/******************************
25
******************************/
router.get('/crear',(req,res)=>{
    res.render('crear');
});

router.post('/',async(req,res)=>{
    const body=req.body;
    //console.log(body);
    try{
        const usuarioDB=new Usuario(body);
        await usuarioDB.save();
        res.redirect('/usuarios');
    }catch(error){
        console.log('error',error);
    }
});

/******************************
28
******************************/
router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const usuarioDB=await Usuario.findOne({_id:id});
        res.render('infoUsuario',{
            usuario:usuarioDB,
            error:false
        });
    }catch(error){
        console.log(error);
        res.render('infoUsuario',{
            error:true,
            mensaje:'No se encuentra el usuario'
        });
    }
});

/******************************
30
******************************/
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const usuarioDB=await Usuario.findByIdAndDelete({_id:id});
        if(usuarioDB){
            res.json({
                estado:true,
                mensaje:'Usuario eliminado'
            });
        }else{
            res.json({
                estado:false,
                mensaje:'Usuario no eliminado'
            });  
        }
    }catch(error){
        console.log(error);
    }
});

/******************************
33
******************************/
router.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try{
        const usuarioDB = await Usuario.findByIdAndUpdate(id,body,{useFindAndModify:false});
        res.json({
            estado:true,
            mensaje:'El usuario se actualizó'
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = router;
