const { Torneo, EstadoTorneo } = require("../db/models");

module.exports.getTorneos = async (req, res) => {
  try {
    const torneos = await Torneo.findAll();
    if (torneos.length === 0) {
      return res.status(200).json({ data: torneos, message: "No hay registros" });
    }

    // Mapea los objetos Torneo para incluir el estado
    const torneosConEstado = await Promise.all(
      torneos.map(async (torneo) => {
        const estado = await EstadoTorneo.findByPk(torneo.idEstado);
        return {
          ...torneo.dataValues,
          estado: {
            idEstado: torneo.idEstado,
            descripcion: estado ? estado.descripcion : '',
          },
        };
      })
    );

    return res.status(200).json({ data: torneosConEstado});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTorneo = async (req, res) => {
  try {
    const [torneo, created] = await Torneo.findOrCreate({
      where: {
        nombre: req.body.nombre,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Torneo ya existe en la Base de Datos",
        data: torneo,
      });
    }
    return res.status(201).json({ 
      message: "El Torneo se agrego exitoxamente",
      data: torneo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
