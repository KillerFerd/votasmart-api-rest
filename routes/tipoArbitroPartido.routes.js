const express = require('express');
const router = express.Router();
const tipoArbitroPartidoController = require('../controllers/tipoArbitroPartido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tipoArbitroPartidoController.getTiposArbitrosPartidos); 
router.post('/', tipoArbitroPartidoController.createTipoArbitroPartido);

module.exports = router;