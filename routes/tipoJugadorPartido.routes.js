const express = require('express');
const router = express.Router();
const tipoJugadorPartidoController = require('../controllers/tipoJugadorPartido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tipoJugadorPartidoController.getTiposJugadoresPartidos); 
router.post('/', tipoJugadorPartidoController.createTipoJugadorPartido);

module.exports = router;