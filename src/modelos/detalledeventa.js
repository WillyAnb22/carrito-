const mongoose = require('mongoose');

const detalleventasSchema = new mongoose.Schema({
    producto:{type:mongoose.Schema.Types.ObjectId,ref: 'Productos'},
    valor:{type:Number, default:0},
    cantidad:{type:Number,default:0},
},{timestamps:true});
module.exports=mongoose.model("DetalleVentas",detalleventasSchema);
 