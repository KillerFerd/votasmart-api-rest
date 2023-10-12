const express = require('express');
const router = express.Router();
const arbitroController = require('../controllers/arbitro.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', arbitroController.getArbitros); 
router.post('/', arbitroController.createArbitro);

module.exports = router;