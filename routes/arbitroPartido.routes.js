const express = require('express');
const router = express.Router();
const arbitroPartidoController = require('../controllers/arbitroPartido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', arbitroPartidoController.getArbitrosPartidos); 
router.post('/', arbitroPartidoController.createArbitroPartido);

module.exports = router;