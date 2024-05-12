const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
 require('dotenv').config();
 const usuario = require('./src/routers/usuario');
 const ventas = require('./src/routers/ventas');
 const carrito = require('./src/routers/carrito');
 const productos = require('./src/routers/productos');
 const detalleventa = require('./src/routers/detalledeventa');
 const clientes = require('./src/routers/clientes');
 const app=express()
 
 app.use(cors())
 app.use(express.json());
app.use('/usuarios',usuario)
app.use('/ventas',ventas)
app.use('/carrito',carrito)
app.use('/productos',productos)
app.use('/detalleventa',detalleventa)
app.use('/clientes',clientes)

app.listen(process.env.PORT, ()=>{
  console.log(`Escuchando en el puerto ${process.env.PORT}`);
  mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Conectado a MongoDB'));
})