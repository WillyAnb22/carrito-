const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');
const httpProductos=require('../controllers/productos') 
const {Router} = require("express");
const router = Router();
// const {productosHelper}=require('../helpers/productos')

router.get('/', httpProductos.getProducto);


router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpProductos.getProductoXId);

router.get('/stock-minimo', [
    validarJWT,
    validarCampos
], httpProductos.getProductoStockMinimo);

router.get('/precio-superior/:precio', [
    validarJWT,
    check('precio', 'El precio debe ser un número').isNumeric(),
    validarCampos
], httpProductos.getProductoSuperior);

router.get('/activos', [
    validarJWT,
    validarCampos
], httpProductos.getActivos);

router.get('/inactivos', [
    validarJWT,
    validarCampos
], httpProductos.getInactivos);

router.post('/', [
    validarJWT,
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre debe tener máximo 42 caracteres').isLength({ max: 42 }),
    check('precio', 'El precio debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    check('stockminimo', 'El stock mínimo debe ser un número').isNumeric(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpProductos.postProducto);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre debe tener máximo 42 caracteres').isLength({ max: 42 }),
    check('precio', 'El precio debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    check('stockminimo', 'El stock mínimo debe ser un número').isNumeric(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpProductos.putProductoModi);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpProductos.putProductoActi);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpProductos.putProductoDesc);


module.exports = router;
