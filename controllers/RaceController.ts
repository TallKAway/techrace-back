import { Request, Response } from 'express';

import RaceRepository from '../repository/RaceRepository';

const getRaces = async (_: Request, res: Response): Promise<void> => {
  try {
    const races = await RaceRepository.getAllRaces();

    res.status(200).json({
      status: 'success',
      data: races,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getRace = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const race = await RaceRepository.getRaceById(Number(id));
    res.status(200).json({
      status: 'success',
      data: race,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export default {
  getRaces,
  getRace,
};
