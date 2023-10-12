const express = require('express');
const router = express.Router();
const tipoJornadaController = require('../controllers/tipoJornada.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tipoJornadaController.getTiposJornadas); 
router.post('/', tipoJornadaController.createTipoJornada);

module.exports = router;