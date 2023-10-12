const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargo.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', cargoController.getCargos); 
router.post('/', cargoController.createCargo);

module.exports = router;