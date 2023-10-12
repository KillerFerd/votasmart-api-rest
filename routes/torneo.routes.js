const express = require('express');
const router = express.Router();
const torneoController = require('../controllers/torneo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', torneoController.getTorneos); 
router.post('/', torneoController.createTorneo);

module.exports = router;