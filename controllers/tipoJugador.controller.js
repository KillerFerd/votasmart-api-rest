const TipoJugador = require("../db/models")["TipoJugador"];

module.exports.getTiposJugadores = async (req, res) => {
  try {
    const tiposJugador = await TipoJugador.findAll();
    if (tiposJugador.length === 0) {
      return res.status(200).json({ data: tiposJugador, message: "No hay registros" });
    }
    return res.status(200).json({ data: tiposJugador });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTipoJugador = async (req, res) => {
  try {
    const [tipoJugador, created] = await TipoJugador.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Tipo de Jugador ya existe en la Base de Datos",
        data: tipoJugador,
      });
    }
    return res.status(201).json({ data: tipoJugador });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
