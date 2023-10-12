const TipoJornada = require("../db/models")["TipoJornada"];

module.exports.getTiposJornadas = async (req, res) => {
  try {
    const tiposJornada = await TipoJornada.findAll();
    if (tiposJornada.length === 0) {
      return res.status(200).json({ data: tiposJornada, message: "No hay registros" });
    }
    return res.status(200).json({ data: tiposJornada });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTipoJornada = async (req, res) => {
  try {
    const [tipoJornada, created] = await TipoJornada.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Tipo de Jornada ya existe en la Base de Datos",
        data: tipoJornada,
      });
    }
    return res.status(201).json({ data: tipoJornada });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
