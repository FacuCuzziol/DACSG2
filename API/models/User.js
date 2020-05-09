const mongoose = require('mongoose');

const User = new mongoose.Schema({
    User:{
        user:{
            type:String,
            required:true
        },
        phash:{
            type:String,
            required:true
        },
        tipo:{
            type:String,
            required:false
            //a futuro, para tener usuarios del tipo hospital y los usuarios del Ministerio de Salud que 
            //envian los suministros a los hospitales
        }
    
    }
});

module.exports = mongoose.model('User',User);