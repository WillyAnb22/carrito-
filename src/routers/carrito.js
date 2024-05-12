const {Router} = require("express");
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');
const httpCarrito = require("../controllers/carrito");
const router = Router();

router.get('/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    validarCampos
], httpCarrito.getCarritoxId);

router.post('/insertar', [
    check('cliente', 'El campo cliente es obligatorio').notEmpty(),
    check('producto', 'El campo dirección es obligatorio').notEmpty(),
    check('direccion', 'El campo dirección debe tener máximo 50 caracteres').isLength({ max: 50 }),
    check('telefono', 'El campo teléfono es obligatorio').notEmpty(),
    check('email', 'El campo email es obligatorio').notEmpty(),
    // check('email').custom(clienteHelper.existeemail),
    check('documento', 'El campo documento es obligatorio').notEmpty(),
    // check('documento').custom(clienteHelper.existedocumento),
    check('fecha_compra', 'El campo fecha es obligatorio').notEmpty(),
    validarCampos
], httpCarrito.postinsertarCarrio);

router.delete("/eliminar", [
    check('carrito', 'Se eliminó el carrito').notEmpty(),
    validarCampos
], httpCarrito.deleteEliminarCarrito);

module.exports = router;
