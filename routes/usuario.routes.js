const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', usuarioController.getUsuarios); 
router.post('/', usuarioController.getAccess);

module.exports = router;