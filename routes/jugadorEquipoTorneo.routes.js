const express = require('express');
const router = express.Router();
const jugadorEquipoTorneoController = require('../controllers/jugadorEquipoTorneo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', jugadorEquipoTorneoController.getJugadoresEquiposTorneos); 
router.post('/', jugadorEquipoTorneoController.createJugadorEquipoTorneo);

module.exports = router;