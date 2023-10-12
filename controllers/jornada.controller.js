const Jornada = require("../db/models")["Jornada"];

module.exports.getJornadas = async (req, res) => {
  try {
    const jornadas = await Jornada.findAll();
    if (jornadas.length === 0) {
      return res.status(200).json({ data: jornadas, message: "No hay registros" });
    }
    return res.status(200).json({ data: jornadas });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createJornada = async (req, res) => {
  try {
    const [jornada, created] = await Jornada.findOrCreate({
      where: {
        idTorneo: req.body.idTorneo,
        idTipo: req.body.idTipo,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "La Jornada ya existe en la Base de Datos",
        data: jornada,
      });
    }
    return res.status(201).json({ data: jornada });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
