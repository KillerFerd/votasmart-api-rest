const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/tecnico.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', tecnicoController.getTecnicos); 
router.post('/', tecnicoController.createTecnico);

module.exports = router;