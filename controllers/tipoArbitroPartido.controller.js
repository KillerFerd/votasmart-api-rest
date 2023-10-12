const TipoArbitroPartido = require("../db/models")["TipoArbitroPartido"];

module.exports.getTiposArbitrosPartidos = async (req, res) => {
  try {
    const tiposArbitroPartido = await TipoArbitroPartido.findAll();
    if (tiposArbitroPartido.length === 0) {
      return res.status(200).json({ data: tiposArbitroPartido, message: "No hay registros" });
    }
    return res.status(200).json({ data: tiposArbitroPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTipoArbitroPartido = async (req, res) => {
  try {
    const [tipoArbitroPartido, created] = await TipoArbitroPartido.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Tipo de Árbitro del Partido ya existe en la Base de Datos",
        data: tipoArbitroPartido,
      });
    }
    return res.status(201).json({ data: tipoArbitroPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
