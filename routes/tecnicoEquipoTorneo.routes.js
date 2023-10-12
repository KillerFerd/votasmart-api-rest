const express = require('express');
const router = express.Router();
const tecnicoEquipoTorneoController = require('../controllers/tecnicoEquipoTorneo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tecnicoEquipoTorneoController.getTecnicosEquiposTorneos); 
router.post('/', tecnicoEquipoTorneoController.createTecnicoEquipoTorneo);

module.exports = router;