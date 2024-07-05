import { Router } from 'express';

import OrientationController from '../controllers/OrientationController';

const route = Router();

// Method: GET
route.get('/all', OrientationController.getOrientations);

export default route;
