const express=require('express')
const router = express.Router();
const { check } =require( 'express-validator');
const httpDetalleVentas= require()


import { Router } from 'express';

router.get("/:id", [
    check("id", "El id es obligatorio").not().isEmpty(),
], httpDetalleVentas.getDetalleVentaXId);

router.post("/insertar", [
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    check("precio_unitario", "El precio unitario debe ser un número").isNumeric(),
], httpDetalleVentas.postinsertarDetalleVenta);

router.put("/:modificar", [
    check("id", "El id es requerido").not().isEmpty(),
    check("estado", "El estado es requerido").not().isEmpty(),
    httpDetalleVentas.validarEstado, // Coloca el middleware directamente en la lista
], httpDetalleVentas.putModificarDetalleVenta);

module.exports = router ;
