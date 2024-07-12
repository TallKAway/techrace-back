import { Request, Response } from 'express';

import SpeedRepository from '../repository/SpeedRepository';

const getSpeeds = async (_: Request, res: Response): Promise<void> => {
  try {
    const speeds = await SpeedRepository.getAllSpeeds();
    res.status(200).json({
      status: 'success',
      data: speeds,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getSpeedById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const speeds = await SpeedRepository.getSpeedById(Number(id));
    res.status(200).json({
      status: 'success',
      data: speeds,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const getSpeedByRaceId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const speed = await SpeedRepository.getSpeedByRaceId(Number(id));
    res.status(200).json({
      status: 'success',
      data: speed,
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
  getSpeeds,
  getSpeedById,
  getSpeedByRaceId,
};
