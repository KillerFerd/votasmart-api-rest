const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/jugador.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', jugadorController.getJugadores); 
router.post('/', jugadorController.createJugador);

module.exports = router;