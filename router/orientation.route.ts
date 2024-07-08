import { Router } from 'express';

import OrientationController from '../controllers/OrientationController';

const route = Router();

// Method: GET
route.get('/all', OrientationController.getOrientations);
route.get('/all/:id', OrientationController.getOrientationsById);
route.get('/all/race/:id', OrientationController.getOrientationsByRaceId);

export default route;
