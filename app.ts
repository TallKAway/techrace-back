import express, { json } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from './config/swaggerConfig';

const app = express();

// Define a setup function to initialize your application
async function setup() {
  try {
    // Dynamically import the configuration to ensure errors can be caught

    const config = await import('./config/');

    if (config === undefined) {
      console.error('Failed to configure the API');
      process.exit(1); // Exit with a failure code
    }

    const port = config.default?.port;

    app.use(json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Configure routes
    const ads = [{ Message: `Template api is running on Port: ${port}` }];
    app.get('/', (req, res) => {
      res.send(ads);
    });

    // Return the configured port along with the app for external handling
    return { app, port };
  } catch (error) {
    console.error('Failed to configure the API:', error);
    process.exit(1); // Exit with a failure code
  }
}

// Export both app and setup for external use
export { app, setup };
