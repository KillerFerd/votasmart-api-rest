const TipoJugadorPartido = require("../db/models")["TipoJugadorPartido"];

module.exports.getTiposJugadoresPartidos = async (req, res) => {
  try {
    const tiposJugadorPartido = await TipoJugadorPartido.findAll();
    if (tiposJugadorPartido.length === 0) {
      return res.status(200).json({ data: tiposJugadorPartido, message: "No hay registros" });
    }
    return res.status(200).json({ data: tiposJugadorPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTipoJugadorPartido = async (req, res) => {
  try {
    const [tipoJugadorPartido, created] = await TipoJugadorPartido.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Tipo de Jugador en el Partido ya existe en la Base de Datos",
        data: tipoJugadorPartido,
      });
    }
    return res.status(201).json({ data: tipoJugadorPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
