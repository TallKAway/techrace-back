import { Router } from 'express';

import SpeedController from '../controllers/SpeedController';

const route = Router();

// Method: GET
route.get('/all', SpeedController.getSpeeds);
route.get('/:id', SpeedController.getSpeedsById);

export default route;
