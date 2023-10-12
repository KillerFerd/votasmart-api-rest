const express = require('express');
const router = express.Router();
const jornadaController = require('../controllers/jornada.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', jornadaController.getJornadas); 
router.post('/', jornadaController.createJornada);

module.exports = router;