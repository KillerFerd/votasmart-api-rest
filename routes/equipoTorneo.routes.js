const express = require('express');
const router = express.Router();
const equipoTorneoController = require('../controllers/equipoTorneo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', equipoTorneoController.getEquiposTorneos); 
router.post('/', equipoTorneoController.createEquipoTorneo);

module.exports = router;