const express = require('express');
const router = express.Router();
const jugadorPartidoController = require('../controllers/jugadorPartido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', jugadorPartidoController.getJugadoresPartidos); 
router.post('/', jugadorPartidoController.createJugadorPartido);

module.exports = router;