import { Router } from 'express';

import SpeedController from '../controllers/SpeedController';

const route = Router();

// Method: GET
route.get('/all', SpeedController.getSpeeds);

export default route;
