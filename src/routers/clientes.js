// const{router}=require('express')

// const router=router()
// router.get('/listar'),
// router.get('/listar/:id')
// router.get('/listar activos')
// router.get('/listar inactivos')
// router.post('/insertar')
// router.put('/modificar')
// router.put('/activar')
// router.put('/desactivar')

const {Router} = require('express');
const { httpClientes } = require('../controllers/clientes');
const {check} = require('express-validator');
const {validarCampos}=require('./../middlewares/validar-campos')
// const { clienteHelper } = require('./../helpers/clientes').default
const router = Router()


import { httpCliente } from '../controllers/clientes';

import { Router } from 'express'

router.get('/',[
    validarCampos   
],httpCliente.getClientes);

router.get('/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    validarCampos
], httpCliente.getClienteXId);

router.post('/insertar',[
    check('nombre','el campo nombre es obligatorio').notEmpty(),
    check('direccion','El campo  direccion es obligatorio').notEmpty(),
    check('direccion','El campo direccion debe tener maximo 50 caracteres').isLength({max:50}),
    check('telefono',' El campo telefono es obligatorio').notEmpty(),
    check('email','El campo email es obligatorio').notEmpty(),
    // check('email').custom(clienteHelper.existeemail),
    check('documento','El campo documento es obligatorio').notEmpty(),
    // check('documento',).custom(clienteHelper.existedocumento),
    check('fecha_compra',' El campo fecha es obligatorio').notEmpty(),
    validarCampos

], httpCliente.postinsertarCliente)

router.put('/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos
], httpCliente.putModificarCliente);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    // check('id').custom(clienteHelper.existeclientesID),
    validarCampos
], httpCliente .putActivarCliente);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    // check('id').custom(clienteHelper.existeclientesID),
    validarCampos
], httpCliente.putdesactivarCliente);





module.exports = router;
