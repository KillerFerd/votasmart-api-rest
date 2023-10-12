const Cambio = require("../db/models")["Cambio"];

module.exports.getCambios = async (req, res) => {
  try {
    const cambios = await Cambio.findAll();
    if (cambios.length === 0) {
      return res.status(200).json({ data: cambios, message: "No hay registros" });
    }
    return res.status(200).json({ data: cambios });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createCambio = async (req, res) => {
  try {
    const [cambio, created] = await Cambio.findOrCreate({
      where: {
        // Define aquí las condiciones de unicidad, si es necesario
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Cambio ya existe en la Base de Datos",
        data: cambio,
      });
    }
    return res.status(201).json({ data: cambio });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};