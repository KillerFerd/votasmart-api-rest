const express = require('express');
const router = express.Router();
const paisController = require('../controllers/pais.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', paisController.getPaises); 
router.post('/', paisController.createPais);

module.exports = router;