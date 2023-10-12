const JugadorPartido = require("../db/models")["JugadorPartido"];

module.exports.getJugadoresPartidos = async (req, res) => {
  try {
    const jugadoresPartido = await JugadorPartido.findAll();
    if (jugadoresPartido.length === 0) {
      return res.status(200).json({ data: jugadoresPartido, message: "No hay registros" });
    }
    return res.status(200).json({ data: jugadoresPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createJugadorPartido = async (req, res) => {
  try {
    const [jugadorPartido, created] = await JugadorPartido.findOrCreate({
      where: {
        idJugador: req.body.idJugador,
        idPartido: req.body.idPartido,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El JugadorPartido ya existe en la Base de Datos",
        data: jugadorPartido,
      });
    }
    return res.status(201).json({ data: jugadorPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
