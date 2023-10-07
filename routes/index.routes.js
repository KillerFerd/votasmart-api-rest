const express = require('express');
const router = express.Router();

// RUTAS:
const authorsRoutes = require("./authors.routes");

// USAR EN:
router.use('/authors', authorsRoutes)


module.exports = router;
