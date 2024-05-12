const Cliente = require("../modelos/cliente");

// Listar todos los clientes
const httpCliente = {
    getClientes: async (req, res) => {
        try {
            const clientes = await Cliente.find();
            res.json({ clientes });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Listar un solo Clientes por su ID
    getClienteXId: async (req, res) => {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findById(id);
            if (cliente) {
                res.json({ cliente });
            } else {
            }
            res.status(400).json({ msg: "Cleinte no encontrado" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Listar Clientes activos
    getClientesActivos: async (req, res) => {
        const { estado } = req.params;
        try {
            const clientesActivos = await Cliente.find({ activo: estado });
            res.json({ clientesActivos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    // Listar Clientes inactivos
    getClientesInactivos: async (req, res) => {
        try {
            const clientesInactivos = await Cliente.find({ activo: false });
            res.json({ clientesInactivos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    // Insertar Cleinte (post)
    postinsertarCliente: async (req, res) => {
        try {
            const { nombre, direccion, telefono, email, documento, estado } = req.body;
            const nuevoCliente = new Cliente({ nombre, direccion, telefono, email, documento, estado });
            await nuevoCliente.save();
            res.json({ msg: "Cliente creado correctamente" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Modificar Cliente 
    putModificarCliente: async (req, res) => {
        const { id } = req.params;
        const { nombre, direccion, telefono, email, documento, estado } = req.body;
        try {
            const clienteModificado = await Cliente.findByIdAndUpdate(id, { nombre, direccion, telefono, email, documento, estado }, { new: true });
            if (!clienteModificado) {
                return res.status(404).json({ msg: "Cliente no encontrado" });
            }
            res.json({ msg: "Cliente modificado correctamente", cliente: clienteModificado });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    // Activar Cliente (PUT)
    putActivarCliente: async (req, res) => {
        const { id } = req.params;
        try {
            const clienteActivado = await Cliente.findByIdAndUpdate(id, { activo: true }, { new: true });
            if (!clienteActivado) {
                return res.status(404).json({ msg: "Cliente no encontrado" });
            }
            res.json({ msg: "Cliente activado correctamente", cliente: clienteActivado });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    // Desactivar cliente
    putdesactivarCliente: async (req, res) => {
        const { id } = req.params;
        try {
            await Cliente.findByIdAndUpdate(id, { activo: false });
            res.json({ msg: "Cliente desactivado correctamente" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
};

module.exports = { httpCliente };
