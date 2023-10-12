const Cargo = require("../db/models")["Cargo"];

module.exports.getCargos = async (req, res) => {
  try {
    const cargos = await Cargo.findAll();
    if (cargos.length === 0) {
      return res.status(200).json({ data: cargos, message: "No hay registros" });
    }
    return res.status(200).json({ data: cargos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createCargo = async (req, res) => {
  try {
    const [cargo, created] = await Cargo.findOrCreate({
      where: {
        descripcion: req.body.descripcion,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Cargo ya existe en la Base de Datos",
        data: cargo,
      });
    }
    return res.status(201).json({ data: cargo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
