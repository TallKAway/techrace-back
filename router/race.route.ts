import { Router } from 'express';

import RaceController from '../controllers/RaceController';

const route = Router();

// Method: GET
route.get('/all', RaceController.getRaces);

export default route;
