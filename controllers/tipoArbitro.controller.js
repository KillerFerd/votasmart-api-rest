const TipoArbitro = require("../db/models")["TipoArbitroPartido"];

module.exports.getTiposArbitros = async (req, res) => {
  try {
    const tipoArbitro = await TipoArbitro.findAll();
    if (tipoArbitro.length === 0) {
      return res.status(200).json({ data: tipoArbitro, message: "No hay registros" });
    }
    return res.status(200).json({ data: tipoArbitro });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTipoArbitro = async (req, res) => {
  try {
    const [tipoArbitro, created] = await TipoArbitro.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Tipo de Árbitro del Partido ya existe en la Base de Datos",
        data: tipoArbitro,
      });
    }
    return res.status(201).json({ data: tipoArbitro });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
