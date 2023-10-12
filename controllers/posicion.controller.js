const Posicion = require("../db/models")["Posicion"];

module.exports.getPosiciones = async (req, res) => {
  try {
    const posiciones = await Posicion.findAll();
    if (posiciones.length === 0) {
      return res.status(200).json({ data: posiciones, message: "No hay registros" });
    }
    return res.status(200).json({ data: posiciones });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createPosicion = async (req, res) => {
  try {
    const [posicion, created] = await Posicion.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "La Posición ya existe en la Base de Datos",
        data: posicion,
      });
    }
    return res.status(201).json({ data: posicion });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
