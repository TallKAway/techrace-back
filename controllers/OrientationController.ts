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

export default {
  getOrientations,
};
