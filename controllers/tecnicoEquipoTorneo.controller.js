const TecnicoEquipoTorneo = require("../db/models")["TecnicoEquipoTorneo"];

module.exports.getTecnicosEquiposTorneos = async (req, res) => {
  try {
    const tecnicosEquipoTorneo = await TecnicoEquipoTorneo.findAll();
    if (tecnicosEquipoTorneo.length === 0) {
      return res.status(200).json({ data: tecnicosEquipoTorneo, message: "No hay registros" });
    }
    return res.status(200).json({ data: tecnicosEquipoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTecnicoEquipoTorneo = async (req, res) => {
  try {
    const [tecnicoEquipoTorneo, created] = await TecnicoEquipoTorneo.findOrCreate({
      where: {
        // Define los campos en donde deseas buscar si ya existe un registro.
        // Por ejemplo, utiliza idEquipoTorneo, idTecnico y idCargo si son únicos.
        idEquipoTorneo: req.body.idEquipoTorneo,
        idTecnico: req.body.idTecnico,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Técnico del Equipo en el Torneo ya existe en la Base de Datos",
        data: tecnicoEquipoTorneo,
      });
    }
    return res.status(201).json({ data: tecnicoEquipoTorneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
