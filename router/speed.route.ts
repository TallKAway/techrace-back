import { Router } from 'express';

import SpeedController from '../controllers/SpeedController';

const route = Router();

// Method: GET
route.get('/all', SpeedController.getSpeeds);
route.get('/:id', SpeedController.getSpeedById);
route.get('/race/:id', SpeedController.getSpeedByRaceId);

export default route;
