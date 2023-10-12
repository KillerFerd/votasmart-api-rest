const ArbitroPartido = require("../db/models")["ArbitroPartido"];

module.exports.getArbitrosPartidos = async (req, res) => {
  try {
    const arbitrosPartidos = await ArbitroPartido.findAll();
    if (arbitrosPartidos.length === 0) {
      return res.status(200).json({ data: arbitrosPartidos, message: "No hay registros" });
    }
    return res.status(200).json({ data: arbitrosPartidos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createArbitroPartido = async (req, res) => {
  try {
    const [arbitroPartido, created] = await ArbitroPartido.findOrCreate({
      where: {
        // Define aquí las condiciones de unicidad, si es necesario
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El ArbitroPartido ya existe en la Base de Datos",
        data: arbitroPartido,
      });
    }
    return res.status(201).json({ data: arbitroPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
