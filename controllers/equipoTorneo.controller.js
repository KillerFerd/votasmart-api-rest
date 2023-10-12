const EquipoTorneo = require("../db/models")["EquipoTorneo"];

module.exports.getEquiposTorneos = async (req, res) => {
  try {
    const equiposTorneo = await EquipoTorneo.findAll();
    if (equiposTorneo.length === 0) {
      return res.status(200).json({ data: equiposTorneo, message: "No hay registros" });
    }
    return res.status(200).json({ data: equiposTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createEquipoTorneo = async (req, res) => {
  try {
    const [equipoTorneo, created] = await EquipoTorneo.findOrCreate({
      where: {
        idTorneo: req.body.idTorneo,
        idEquipo: req.body.idEquipo,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El EquipoTorneo ya existe en la Base de Datos",
        data: equipoTorneo,
      });
    }
    return res.status(201).json({ data: equipoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
