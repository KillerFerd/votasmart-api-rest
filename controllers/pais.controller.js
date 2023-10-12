const Pais = require("../db/models")["Pais"];

module.exports.getPaises = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    if (paises.length === 0) {
      return res.status(200).json({ data: paises, message: "No hay registros" });
    }
    return res.status(200).json({ data: paises });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createPais = async (req, res) => {
  try {
    const [pais, created] = await Pais.findOrCreate({
      where: {
        nombre: req.body.nombre,
        nacionalidad: req.body.nacionalidad,
      },
      defaults: { ...req.body },
    });
    if (!created) {
      return res.status(409).json({
        message: "El Pais ya existe en la Base de Datos",
        data: pais,
      });
    }
    return res.status(201).json({ data: pais });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
