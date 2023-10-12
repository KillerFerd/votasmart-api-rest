const Tecnico = require("../db/models")["Tecnico"];

module.exports.getTecnicos = async (req, res) => {
  try {
    const tecnicos = await Tecnico.findAll();
    if (tecnicos.length === 0) {
      return res.status(200).json({ data: tecnicos, message: "No hay registros" });
    }
    return res.status(200).json({ data: tecnicos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createTecnico = async (req, res) => {
  try {
    const [tecnico, created] = await Tecnico.findOrCreate({
      where: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Técnico ya existe en la Base de Datos",
        data: tecnico,
      });
    }
    return res.status(201).json({ data: tecnico });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
