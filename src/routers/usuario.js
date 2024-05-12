// const{router}=require('express')
// const router=router()
const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = express.Router();
// const {usuarioHttp}=require('../controllers/usuario')
// const {usuarioHelper}=require('../helpers/usuario')
const { Router } =require('express'); 
const { httpUsuarios } = require('../controllers/usuario');
router.get('/',httpUsuarios.getUsuarios);

router.post('/',[   
    // validarJWT, 
    check('email', 'El documento es obligatorio!').not().isEmpty(),
    // check('email').custom( usuarioHelper.existeEmail ),
    check('password', 'Password no es válido').isLength({ min: 8}),
    validarCampos       
],httpUsuarios.postinsertarUsuario);
     

router.put('/activar/:id',[
    // validarJWT, 
    check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
],httpUsuarios.putactivarUsuario);

router.put('/inactivar/:id',[
    // validarJWT,
    check('id', 'No es un ID válido').isMongoId(), 
    // check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
],httpUsuarios.putdesactivarUsuario);

router.post("/login", [
    check("email","El documento es obligatorio").not().isEmpty(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    validarCampos
],httpUsuarios.postLoginUsuario);

module.exports = router;