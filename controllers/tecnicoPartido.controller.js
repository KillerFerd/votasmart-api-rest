const TecnicoPartido = require("../db/models")["TecnicoPartido"];

module.exports.getTecnicosPartidos = async (req, res) => {
  try {
    const tecnicosPartido = await TecnicoPartido.findAll();
    if (tecnicosPartido.length === 0) {
      return res.status(200).json({ data: tecnicosPartido, message: "No hay registros" });
    }
    return res.status(200).json({ data: tecnicosPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTecnicoPartido = async (req, res) => {
  try {
    const [tecnicoPartido, created] = await TecnicoPartido.findOrCreate({
      where: {
        // Define los campos en donde deseas buscar si ya existe un registro.
        // Por ejemplo, utiliza idTecnico, idPartido e idCargo si son únicos.
        idTecnico: req.body.idTecnico,
        idPartido: req.body.idPartido,
        idCargo: req.body.idCargo,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Técnico del Partido ya existe en la Base de Datos",
        data: tecnicoPartido,
      });
    }
    return res.status(201).json({ data: tecnicoPartido });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
