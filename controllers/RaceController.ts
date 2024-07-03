import { Request, Response } from 'express';

const RaceRepository = require('../repository/RaceRepository');

async function getAllRaces(_: Request, res: Response) {
  try {
    const races = await RaceRepository.getAllRaces();
    res.status(200).json({
      status: 'success',
      data: races,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}

module.exports = {
  getAllRaces,
};
