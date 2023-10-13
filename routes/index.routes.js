const express = require('express');
const router = express.Router();

// RUTAS:
const arbitroRoutes = require("./arbitro.routes");	
const arbitroPartidoRoutes = require("./arbitroPartido.routes");
const cambioRoutes = require("./cambio.routes");
const cargoRoutes = require("./cargo.routes");
const equipoRoutes = require("./equipo.routes");
const equipoTorneoRoutes = require("./equipoTorneo.routes");
const estadoTorneoRoutes = require("./estadoTorneo.routes");
const jornadaRoutes = require("./jornada.routes");
const jugadorRoutes = require("./jugador.routes");
const jugadorEquipoTorneoRoutes = require("./jugadorEquipoTorneo.routes");
const jugadorPartidoRoutes = require("./jugadorPartido.routes");
const paisRoutes = require("./pais.routes");
const partidoRoutes = require("./partido.routes");
const posicionRoutes = require("./posicion.routes");
const tecnicoRoutes = require("./tecnico.routes");
const tecnicoEquipoTorneoRoutes = require("./tecnicoEquipoTorneo.routes");
const tecnicoPartidoRoutes = require("./tecnicoPartido.routes");
const tipoArbitroRoutes = require("./tipoArbitro.routes");
const tipoJornadaRoutes = require("./tipoJornada.routes");
const tipoJugadorRoutes = require("./tipoJugador.routes");
const tipoJugadorPartidoRoutes = require("./tipoJugadorPartido.routes");
const torneoRoutes = require("./torneo.routes");

// USAR EN:
router.use('/arbitro', arbitroRoutes)            
router.use('/arbitroPartido', arbitroPartidoRoutes)     
router.use('/cambio', cambioRoutes)             
router.use('/cargo', cargoRoutes)              
router.use('/equipo', equipoRoutes)             
router.use('/equipoTorneo', equipoTorneoRoutes)       
router.use('/estadoTorneo', estadoTorneoRoutes)       
router.use('/jornada', jornadaRoutes)            
router.use('/jugador', jugadorRoutes)            
router.use('/jugadorEquipoTorneo', jugadorEquipoTorneoRoutes)
router.use('/jugadorPartido', jugadorPartidoRoutes)     
router.use('/pais', paisRoutes)               
router.use('/partido', partidoRoutes)            
router.use('/posicion', posicionRoutes)           
router.use('/tecnico', tecnicoRoutes)            
router.use('/tecnicoEquipoTorneo', tecnicoEquipoTorneoRoutes)
router.use('/tecnicoPartido', tecnicoPartidoRoutes)     
router.use('/tipoArbitro', tipoArbitroRoutes) 
router.use('/tipoJornada', tipoJornadaRoutes)        
router.use('/tipoJugador', tipoJugadorRoutes)        
router.use('/tipoJugadorPartido', tipoJugadorPartidoRoutes) 
router.use('/torneo', torneoRoutes)

module.exports = router;