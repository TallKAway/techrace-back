import { Router } from 'express';

import RaceController from '../controllers/RaceController';

const route = Router();

// Method: GET
route.get('/all', RaceController.getRaces);
route.get('/:id', RaceController.getRace);
route.get('/all/sortedByDate', RaceController.getRacesSortedByDate);

export default route;
