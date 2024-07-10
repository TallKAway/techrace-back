import { prisma } from '../utils/database';
import { IRace } from '../models/RaceModel';

const getAllRaces = async (): Promise<IRace[]> => {
  try {
    return await prisma.race.findMany({
      orderBy: {
        start_Time: 'desc',
      },
    });
  } catch (error) {
    console.error('Error fetching races:', error);
    throw error;
  }
};

const getRaceById = async (id: number): Promise<IRace | null> => {
  try {
    const race = await prisma.race.findUnique({
      where: {
        id,
      },
      include: {
        speeds: {
          take: 1,
        },
      },
    });

    if (race) {
      race.speeds = race.speeds.slice(0, 1);
    }

    return race;
  } catch (error) {
    console.error('Error fetching race:', error);
    throw error;
  }
};

export default {
  getAllRaces,
  getRaceById,
};
