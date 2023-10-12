const EstadoTorneo = require("../db/models")["EstadoTorneo"];

module.exports.getEstadosTorneos = async (req, res) => {
  try {
    const estadosTorneo = await EstadoTorneo.findAll();
    if (estadosTorneo.length === 0) {
      return res.status(200).json({ data: estadosTorneo, message: "No hay registros" });
    }
    return res.status(200).json({ data: estadosTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createEstadoTorneo = async (req, res) => {
  try {
    const [estadoTorneo, created] = await EstadoTorneo.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El EstadoTorneo ya existe en la Base de Datos",
        data: estadoTorneo,
      });
    }
    return res.status(201).json({ data: estadoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};