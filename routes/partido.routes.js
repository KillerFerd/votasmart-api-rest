const express = require('express');
const router = express.Router();
const partidoController = require('../controllers/partido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', partidoController.getPartidos); 
router.post('/', partidoController.createPartido);

module.exports = router;