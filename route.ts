import { Express, Router } from 'express';

import raceRoute from './router/race.route';
import speedRoute from './router/speed.route';
import orientationRoute from './router/orientation.route';
import { apiKeyMiddleware } from './middleware/securityMiddleware';

const apiRouter = Router();

apiRouter.use(apiKeyMiddleware);
apiRouter.use('/race', raceRoute);
apiRouter.use('/speed', speedRoute);
apiRouter.use('/orientation', orientationRoute);

export default function setupRoutes(app: Express) {
  app.use('/api', apiRouter);
}
