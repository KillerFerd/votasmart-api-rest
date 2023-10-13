const express = require('express');
const router = express.Router();
const tipoArbitroController = require('../controllers/tipoArbitro.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tipoArbitroController.getTiposArbitros); 
router.post('/', tipoArbitroController.createTipoArbitro);

module.exports = router;