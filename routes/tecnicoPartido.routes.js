const express = require('express');
const router = express.Router();
const tecnicoPartidoController = require('../controllers/tecnicoPartido.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tecnicoPartidoController.getTecnicosPartidos); 
router.post('/', tecnicoPartidoController.createTecnicoPartido);

module.exports = router;