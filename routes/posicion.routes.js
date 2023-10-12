const express = require('express');
const router = express.Router();
const posicionController = require('../controllers/posicion.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', posicionController.getPosiciones); 
router.post('/', posicionController.createPosicion);

module.exports = router;