const express = require('express');
const router = express.Router();
const estadoTorneoController = require('../controllers/estadoTorneo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', estadoTorneoController.getEstadosTorneos); 
router.post('/', estadoTorneoController.createEstadoTorneo);

module.exports = router;