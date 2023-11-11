const Usuario = require("../db/models")["Usuario"];
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    if (usuarios.length === 0) {
      return res.status(200).json({ data: usuarios, message: "No hay registros" });
    }
    return res.status(200).json({ data: usuarios });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
  
  
module.exports.getAccess = async (req, res) => {
    const { usuario, contraseña } = req.body;
  
    try {
      // Buscar al usuario por nombre de usuario
      const user = await Usuario.findOne({ where: { usuario } });
  
      // Verificar si el usuario existe y si la contraseña es valida
      if (!user) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }else{
        const contraseniaValida = await bcrypt.compare(contraseña, user.contraseña);
  
        if (!contraseniaValida) {
          return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        } else {

            const generateSecretKey = () => {
                return crypto.randomBytes(32).toString('hex'); // 32 bytes para una cadena hexadecimal
            };

            const accessTokenSecret = generateSecretKey();
            const refreshTokenSecret = generateSecretKey();

            const generateAccessToken = (user) => {
                return jwt.sign({ id: user.id, usuario: user.usuario }, accessTokenSecret, { expiresIn: '15m' });
            };
            
            const generateRefreshToken = (user) => {
                return jwt.sign({ id: user.id, usuario: user.usuario }, refreshTokenSecret, { expiresIn: '7d' });
            };
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
  
            res.json({ accessToken, refreshToken });
        }
      }
      
    } catch (error) {
      console.error('Error en el proceso de autenticación:', error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};