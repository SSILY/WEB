const express = require('express');
const router = express.Router();

const Cancion = require('../models/cancion');

/**READ**/
router.get('/', async(req, res)=> {
    try{
        const arregloCancionesDB = await Cancion.find();
        res.render('canciones', {
            arregloCanciones: arregloCancionesDB
        })
    }
    catch(error){
        console.log(error);
    }
});

/**CREATE**/
router.get('/crearCancion', (req, res) => {
    res.render('crearCancion');
});

router.post('/', async(req, res) => {
    const body = req.body;
    try{
        const cancionDB = new Cancion(body);
        await cancionDB.save();
        res.redirect('/canciones');
    }
    catch(error){
        console.log('error', error);
    }
})

/**READ ONLY ONE ITEM**/
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const cancionDB = await Cancion.findOne({_id:id});
        res.render('infoCancion', {
            cancion:cancionDB,
            error:false
        });
    }
    catch(error){
        console.log(error);
        res.render('infoCancion', {
            error:true,
            mensaje:'No se encuentra la cancion'
        });
    }
});

/**DELETE**/
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const cancionDB = await Cancion.findByIdAndDelete({_id:id});
        if(cancionDB){
            res.json({
                estado:true,
                mensaje:'Cancion eliminada'
            });
        }
        else{
            res.json({
                estado:false,
                mensaje:'Cancion no eliminada'
            });
        }
    }
    catch(error){
        console.log(error);
    }
});

/**UPDATE**/
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const cancionDB = await Cancion.findByIdAndUpdate(id, body, {useFindAndModify:false});
        res.json({
            estado:true,
            mensaje:'La cancion se actualizó'
        });
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;
