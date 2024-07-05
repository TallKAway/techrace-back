import { Request, Response } from 'express';

import SpeedRepository from '../repository/SpeedRepository';

const getSpeeds = async (_: Request, res: Response): Promise<void> => {
  try {
    const speeds = await SpeedRepository.getAllSpeeds();
    res.status(200).json({
      status: 'success',
      data: speeds,
    });
  } catch (err) {
    const error = err as Error;
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getSpeedsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const speeds = await SpeedRepository.getAllSpeedsById(Number(id));
    res.status(200).json({
      status: 'success',
      data: speeds,
    });
  } catch (err) {
    const error = err as Error;
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getSpeedsByRaceId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const speeds = await SpeedRepository.getAllSpeedsByRaceId(Number(id));
    res.status(200).json({
      status: 'success',
      data: speeds,
    });
  } catch (err) {
    const error = err as Error;
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getSpeedsByRaceId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const speeds = await SpeedRepository.getAllSpeedsByRaceId(Number(id));
    res.status(200).json({
      status: 'success',
      data: speeds,
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
  getSpeeds,
  getSpeedsById,
  getSpeedsByRaceId,
};
