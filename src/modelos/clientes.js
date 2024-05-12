const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String, required:true },
    email:{type:Number, required:true, unique:true},
    documento:{type:String, required:true, unique:true},
    estado:{type:Number, require:true, default:1},

},{timestamps:true});
module.exports=mongoose.model("clientes",clientesSchema); 