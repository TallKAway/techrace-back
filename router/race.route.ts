import { Router } from 'express';

import RaceController from '../controllers/RaceController';

const route = Router();

route.get('/all', RaceController.getAllRaces);

export default route;
