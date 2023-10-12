const express = require('express');
const router = express.Router();
const tipoJugadorController = require('../controllers/tipoJugador.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tipoJugadorController.getTiposJugadores); 
router.post('/', tipoJugadorController.createTipoJugador);

module.exports = router;