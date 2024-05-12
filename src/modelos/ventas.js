const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente:{type:mongoose.Schema.Types.ObjectId,ref:'Cliente'   },
    fecha: { type: Date, required: true},
    valor: { type: Number, default: 0 },
    descuento: { type: Number, default: 0 },
    estado: { type: Number, required: true, default: 1 },
},{timestamps:true});

module.exports= mongoose.model("Venta", ventaSchema)