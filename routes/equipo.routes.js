const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', equipoController.getEquipos); 
router.post('/', equipoController.createEquipo);

module.exports = router;