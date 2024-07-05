import { Request, Response } from 'express';

import OrientationRepository from '../repository/OrientationRepository';

const getOrientations = async (_: Request, res: Response): Promise<void> => {
  try {
    const orientations = await OrientationRepository.getAllOrientations();

    res.status(200).json({
      status: 'success',
      data: orientations,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getOrientationsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orientations = await OrientationRepository.getAllOrientationsById(Number(id));
    res.status(200).json({
      status: 'success',
      data: orientations,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getOrientationsByRaceId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orientations = await OrientationRepository.getAllOrientationsByRaceId(Number(id));
    res.status(200).json({
      status: 'success',
      data: orientations,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export default {
  getOrientations,
  getOrientationsById,
  getOrientationsByRaceId,
};
