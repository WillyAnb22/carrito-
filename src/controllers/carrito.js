const Carrito = require("../modelos/carrito");

// Listar el carrito del cliente por su ID
const httpCarrito = {
    getCarritoxId: async (req, res) => {
        const { id } = req.params;
        try {
            const carrito = await Carrito.findById(id);
            if (carrito) {
                res.json({ carrito });
            } else {
                res.status(404).json({ msg: "Carrito no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al buscar el carrito" });
        }
    },
    // Insertar Carrito (post)
    postinsertarCarrio: async (req, res) => {
        try {
            const { cliente, producto, valor, cantidad, descuento } = req.body;
            const nuevoCarrito = new Usuario({ cliente, producto, valor, cantidad, descuento });
            await nuevoCarrito.save();
            res.json({ msg: "Carrito creado correctamente" });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

      // Eliminar un carrito por ID
      deleteEliminarCarrito: async (req, res) => {
        try {
          const { id } = req.params;
          await Carrito.deleteOne({ _id: id });
          res.json({ msg: "Se ha eliminado el carrito" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error al eliminar el carrito" });
        }
      },
};

module.exports = httpCarrito;






