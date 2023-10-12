const Equipo = require("../db/models")["Equipo"];

module.exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.findAll();
    if (equipos.length === 0) {
      return res.status(200).json({ data: equipos, message: "No hay registros" });
    }
    return res.status(200).json({ data: equipos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createEquipo = async (req, res) => {
  try {
    const [equipo, created] = await Equipo.findOrCreate({
      where: {
        nombre: req.body.nombre,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Equipo ya existe en la Base de Datos",
        data: equipo,
      });
    }
    return res.status(201).json({ data: equipo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};