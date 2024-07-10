import { Router } from 'express';

import SpeedController from '../controllers/SpeedController';

const route = Router();

// Method: GET
route.get('/all', SpeedController.getSpeeds);
route.get('/all/:id', SpeedController.getSpeedsById);
route.get('/all/race/:id', SpeedController.getSpeedsByRaceId);
route.get('/race/:id', SpeedController.getSpeedByRaceId);

export default route;
