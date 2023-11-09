const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const routes = require('./routes/index.routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./swaggerOptions');
const swaggerSpecs = swaggerJsDoc(options);
const cors = require('cors');
const db = require('./db/models/index')

app.use(express.json());
app.use(cors());
app.use('/api/', routes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

db.sequelize.sync({force: true}).then(() =>{
    app.listen(PORT, () => {
        console.log(`el servidor esta corriendo en el puerto ${PORT}`);
    })
});

