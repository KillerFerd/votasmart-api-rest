const JugadorEquipoTorneo = require("../db/models")["JugadorEquipoTorneo"];

module.exports.getJugadoresEquiposTorneos = async (req, res) => {
  try {
    const jugadoresEquipoTorneo = await JugadorEquipoTorneo.findAll();
    if (jugadoresEquipoTorneo.length === 0) {
      return res.status(200).json({ data: jugadoresEquipoTorneo, message: "No hay registros" });
    }
    return res.status(200).json({ data: jugadoresEquipoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createJugadorEquipoTorneo = async (req, res) => {
  try {
    const [jugadorEquipoTorneo, created] = await JugadorEquipoTorneo.findOrCreate({
      where: {
        idEquipoTorneo: req.body.idEquipoTorneo,
        idJugador: req.body.idJugador,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El JugadorEquipoTorneo ya existe en la Base de Datos",
        data: jugadorEquipoTorneo,
      });
    }
    return res.status(201).json({ data: jugadorEquipoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
