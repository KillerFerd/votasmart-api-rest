const Jugador = require("../db/models")["Jugador"];

module.exports.getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    if (jugadores.length === 0) {
      return res.status(200).json({ data: jugadores, message: "No hay registros" });
    }
    return res.status(200).json({ data: jugadores });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createJugador = async (req, res) => {
  try {
    const [jugador, created] = await Jugador.findOrCreate({
      where: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Jugador ya existe en la Base de Datos",
        data: jugador,
      });
    }
    return res.status(201).json({ data: jugador });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
