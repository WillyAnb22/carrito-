const Ventas = require("../modelos/ventas");

const httpVentas = {
  // Listar todas las ventas
  getVentaslistar: async (req, res) => {
    try {
      const ventas = await Ventas.find();
      res.json({ ventas });
      res.json({ msg: "Lista de todas las ventas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas" });
    }
  },

  // Listar una venta por su ID
  getVentasxId: async (req, res) => {
    const { id } = req.params;
    try {
   
      const venta = await Ventas.findById(id);
      res.json({ msg: "Venta encontrada por ID", venta });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la venta por ID" });
    }
  },

  // Listar ventas activas
  getVentaActi: async (req, res) => {
    try {

      res.json({ msg: "Lista de ventas activas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas activas" });
    }
  },

  // Listar ventas inactivas
  getVentasInac: async (req, res) => {
    try {

      res.json({ msg: "Lista de ventas inactivas" });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de ventas inactivas" });
    }
  },

  // Listar ventas del cliente especificado
  getVentasEspecificas: async (req, res) => {
    const { clienteId } = req.params;
    try {
   
      res.json({ msg: `Lista de ventas del cliente ${clienteId}` });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas del cliente" });
    }
  },

  // Listar todas las ventas entre dos fechas
  getVentasentredosfecha: async (req, res) => {
    const { fechaInicio, fechaFin } = req.params;
    try {
   
      const ventas = await Ventas.find({ fecha: { $gte: fechaInicio, $lte: fechaFin } });
      res.json({ msg: "Lista de ventas entre las fechas especificadas", ventas });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas entre las fechas especificadas" });
    }
  },

  // Listar ventas con un valor superior al especificado
  getVentasSuperior: async (req, res) => {
    const { valor } = req.params;
    try {

      const ventas = await Ventas.find({ valor: { $gt: valor } });
      res.json({ msg: "Lista de ventas con valor superior al especificado", ventas });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las ventas con valor superior al especificado" });
    }
  },

  // Insertar una nueva venta
  postVentasInsertar: async (req, res) => {
    try {
   
      res.json({ msg: "Venta insertada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al insertar una nueva venta" });
    }
  },

  // Modificar una venta
  putVentasModificar: async (req, res) => {
    const { id } = req.params;
    try {
  
      await Ventas.findByIdAndUpdate(id, req.body);
      res.json({ msg: "Venta modificada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al modificar la venta" });
    }
  },

  // Activar una venta
  putVentasActivar: async (req, res) => {
    const { id } = req.params;
    try {
    
      await Ventas.findByIdAndUpdate(id, { activo: true });
      res.json({ msg: "Venta activada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al activar la venta" });
    }
  },

  // Desactivar una venta
  putVentasDesactivar: async (req, res) => {
    const { id } = req.params;
    try {
      await Ventas.findByIdAndUpdate(id, { activo: false });
      res.json({ msg: "Venta desactivada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al desactivar la venta" });
    }
  }
};

module.exports = { httpVentas };