const DetalleVentas = require("../modelos/detalledeventa"); // Asumiendo que el modelo es "detalleVentas" en minúsculas

const httpDetalleVentas = {
  // Listar detalle de venta por ID
  getDetalleVentaXId: async (req, res) => {
    const { id } = req.params;
    try {
      const detalleVenta = await DetalleVentas.findById(id);
      if (!detalleVenta) {
        return res.status(404).json({ msg: "No se encontró la venta con el ID ingresado" });
      }
      res.json({ detalleVenta });
    } catch (error) {
      res.status(500).json({ error: "Error al buscar el detalle de venta" });
    }
  },
  // Insertar Usuarios (post)
  postinsertarDetalleVenta: async (req, res) => {
    try {
      const {venta, producto, valor, cantidad} = req.body;
      const nuevodetalleventa = new DetalleVentas({venta, producto, valor, cantidad});
      await nuevodetalleventa.save();
      res.json({ msg: "Detalle de venta creado correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  // Modificar Detalle de Venta (PUT)
  putModificarDetalleVenta: async (req, res) => {
    const { id } = req.params;
    try {
      await DetalleVentas.findByIdAndUpdate(id, req.body);
      res.json({ msg: "Detalle de venta modificado correctamente" });
    } catch (error) {
      res.status(400).json({ error: "Error al modificar el detalle de venta" });
    }
  },
};


module.exports ={httpDetalleVentas};
