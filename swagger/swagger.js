const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Chicken API',
        version: '1.0.0',
        description: 'API documentation for the Chicken API',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/routes/chickenRoutes.js', './src/models/chickenModel.js'],
  };
  
  module.exports = swaggerOptions;
  