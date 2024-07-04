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

export default {
  getAllRaces,
};
