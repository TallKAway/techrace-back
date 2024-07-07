import { Express, Router } from 'express';

import raceRoute from './router/race.route';
import speedRoute from './router/speed.route';

const apiRouter = Router();

apiRouter.use('/race', raceRoute);
apiRouter.use('/speed', speedRoute);

export default function setupRoutes(app: Express) {
  app.use('/api', apiRouter);
}
