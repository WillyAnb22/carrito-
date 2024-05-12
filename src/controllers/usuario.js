const Usuario = require("../modelos/usuarios");

// Listar todos los usuarios
const httpUsuarios = {
  getUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json({ usuarios });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Listar un solo usuario por su ID
  getUsuarioXId: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findById(id);
      if (usuario) {
        res.json({ usuario });
      } else {
      }
      res.status(400).json({ msg: "Usuario no encontrado" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Listar Usuarios activos
  getUsuariosActivos: async (req, res) => {
    const { estado } = req.params;
    try {
      const usuariosActivos = await Usuario.find({ activo: estado });
      res.json({ usuariosActivos });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Listar Usuarios inactivos
  getUsuariosActivos: async (req, res) => {
    try {
      const usuariosInactivos = await Usuario.find({ activo: false });
      res.json({ usuariosInactivos });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Insertar Usuarios (post)
  postinsertarUsuario: async (req, res) => {
    try {
      const {email, password, estado} = req.body;
      const nuevoUsuario = new Usuario({email, password, estado});
      await nuevoUsuario.save();
      res.json({ msg: "Usuario creado correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Login de usuarios (post)
  postLoginUsuario: async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.find({ email, password });
    if (usuario) {
      if (usuario.estado == 1) res.json({ usuario });
      else res.status(401).json({ msg: "Usuario Inactivo" });
    } else {
      res.status(401).json({ msg: "Usuario no existe" });
    }
  },

  // Cambiar contraseña (post)
  postcambiarContraseña: async (req, res) => {
    const { id } = req.params;
    const { contraseña } = req.body;
    try {
      await Usuario.findByIdAndUpdate(id, { contraseña });
      res.json({ msg: "Contraseña cambiada correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Modificar usuario (put)
  putmodificarUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.findByIdAndUpdate(id, req.body);
      res.json({ msg: "Usuario modificado correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Activar usuario
  putactivarUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.findByIdAndUpdate(id, { activo: true });
      res.json({ msg: "Usuario activado correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // Desactivar usuario
  putdesactivarUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.findByIdAndUpdate(id, { activo: false });
      res.json({ msg: "Usuario desactivado correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

module.exports = { httpUsuarios };