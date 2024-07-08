import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Authentication',
      version: '1.0.0',
      description: 'Documentation for the Techrace API',
    },
  },
  apis: ['./docs/swagger/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;
