const Partido = require("../db/models")["Partido"];

module.exports.getPartidos = async (req, res) => {
  try {
    const partidos = await Partido.findAll();
    if (partidos.length === 0) {
      return res.status(200).json({ data: partidos, message: "No hay registros" });
    }
    return res.status(200).json({ data: partidos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createPartido = async (req, res) => {
  try {
    const [partido, created] = await Partido.findOrCreate({
      where: {
        idJornada: req.body.idJornada,
        idEquipoLocal: req.body.idEquipoLocal,
        idEquipoVisitante: req.body.idEquipoVisitante,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Partido ya existe en la Base de Datos",
        data: partido,
      });
    }
    return res.status(201).json({ data: partido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
