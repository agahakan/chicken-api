const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const chickenRoutes = require('./routes/chickenRoutes');
const swaggerOptions = require('../swagger/swagger');

const app = express();

mongoose.connect('mongodb://mongo:27017/chicken-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/chicken', chickenRoutes);

module.exports = app;
