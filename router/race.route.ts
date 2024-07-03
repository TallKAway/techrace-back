import { Router } from 'express';

const RaceController = require('../controllers/RaceController');

const route = Router();

route.get('/all', RaceController.getAllRaces);

export default route;
