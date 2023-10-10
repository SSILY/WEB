/***************************
18
****************************/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:String,
    apellido:String
});

/*Modelo*/
const Usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = Usuario;