const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJsDoc = require('swagger-jsdoc');

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['src/routes/user.js', 'src/routes/authentication.route.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
