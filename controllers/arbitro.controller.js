const Arbitro = require("../db/models")["Arbitro"];

module.exports.getArbitros = async (req, res) => {
  try {
    const arbitros = await Arbitro.findAll();
    if (arbitros.length === 0) {
      return res.status(200).json({ data: arbitros, message: "No hay registros" });
    }
    return res.status(200).json({ data: arbitros });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createArbitro = async (req, res) => {
  try {
    const [arbitro, created] = await Arbitro.findOrCreate({
      where: {
        // Define aquí las condiciones de unicidad, si es necesario
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Arbitro ya existe en la Base de Datos",
        data: arbitro,
      });
    }
    return res.status(201).json({ data: arbitro });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
