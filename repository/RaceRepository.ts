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

const getRaceById = async (id: number): Promise<IRace | null> => {
  try {
    return await prisma.race.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error('Error fetching race:', error);
    throw error;
  }
};

export default {
  getAllRaces,
  getRaceById,
};
