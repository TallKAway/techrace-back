import { prisma } from '../utils/database';
import { IRace } from '../models/RaceModel';

const getAllRaces = async (): Promise<IRace[]> => {
  try {
    return await prisma.race.findMany();
  } catch (error) {
    console.error('Error fetching races:', error);
    throw error;
  }
};

const createRace = async (race: Omit<IRace, 'id'>): Promise<IRace> => {
  try {
    return await prisma.race.create({
      data: race,
    });
  } catch (error) {
    console.error('Error creating race:', error);
    throw error;
  }
};

export default {
  getAllRaces,
  createRace,
};
