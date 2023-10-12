const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cancionSchema = new Schema({
    nombre:String,
    artista:String,
    album:String,
    genero:String
});

const Cancion = mongoose.model('Cancion', cancionSchema);

module.exports = Cancion;