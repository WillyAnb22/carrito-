const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');
const {Router} = require("express");
const router = Router();
const {httpVentas}=require('../controllers/ventas') 
// const {ventasHelper}=require('../helpers/ventas')

router.get('/', httpVentas.getVentaslistar);


router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpVentas.getVentasxId);

router.get('/activas', [
    validarJWT,
    validarCampos
], httpVentas.getVentaActi);

router.get('/inactivas', [
    validarJWT,
    validarCampos
], httpVentas.getVentasInac);

router.get('/cliente/:clienteId', [
    validarJWT,
    check('clienteId', 'No es un ID válido').isMongoId(),
    validarCampos
], httpVentas.getVentasEspecificas);

router.get('/entre-fechas/:fechaInicio/:fechaFin', [
    validarJWT,
    validarCampos
], httpVentas.getVentasentredosfecha);

router.get('/superior-valor/:valor', [
    validarJWT,
    validarCampos
], httpVentas.getVentasSuperior);

router.post('/', [
    validarJWT,
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('descuento', 'El descuento debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpVentas.postVentasInsertar);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('descuento', 'El descuento debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpVentas.putVentasModificar);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpVentas.putVentasActivar);

router.put('/inactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpVentas.putVentasDesactivar);

module.exports = router;