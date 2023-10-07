const Author = require("../db/models")["Author"];

// ENDPOINTS:
module.exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    if (authors.length === 0) {
      return res.status(200).json({ data: authors, message: "No hay registros" });
    }
    return res.status(200).json({ data: authors });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.createAuthor = async (req, res) => {
    try {
      const [author, created] = await Author.findOrCreate({
        where: {
          name: req.body.name,
          lastName: req.body.lastName,
        },
        defaults: { ...req.body },
      });
      if (!created) {
        return res.status(409).json({
            message: "El Autor ya existe en la Base de Datos",data: author,
          });
      }
      return res.status(201).json({ data: author });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
