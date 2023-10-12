const express = require('express');
const router = express.Router();
const cambioController = require('../controllers/cambio.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', cambioController.getCambios); 
router.post('/', cambioController.createCambio);

module.exports = router;