import { Request, Response } from 'express';

import RaceRepository from '../repository/RaceRepository';
import { IRace } from '../models/RaceModel';

const getRaces = async (_: Request, res: Response): Promise<void> => {
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

const getRacesSortedByDate = async (_: Request, res: Response): Promise<void> => {
  try {
    const races: Array<IRace> = await RaceRepository.getAllRaces();

    const racesSortedByDate: Array<{ date: string; races: IRace[] }> = groupByDate(races);

    res.status(200).json({
      status: 'success',
      data: racesSortedByDate,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const groupByDate = (races: IRace[]): Array<{ date: string; races: IRace[] }> => {
  const groupedRaces: { [key: string]: IRace[] } = {};

  races.forEach((race) => {
    const date = race.start_Time.toISOString().split('T')[0];

    if (!groupedRaces[date]) {
      groupedRaces[date] = [];
    }

    groupedRaces[date].push(race);
  });

  return Object.keys(groupedRaces).map((date) => ({
    date,
    races: groupedRaces[date],
  }));
};

export default {
  getRaces,
  getRace,
  getRacesSortedByDate,
};
