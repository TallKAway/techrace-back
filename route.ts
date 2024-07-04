import { Express, Router } from 'express';

import raceRoute from './router/race.route';

const apiRouter = Router();

apiRouter.use('/race', raceRoute);

export default function setupRoutes(app: Express) {
  app.use('/api', apiRouter);
}
