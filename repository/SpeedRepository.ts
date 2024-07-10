import { prisma } from '../utils/database';
import { ISpeed } from '../models/SpeedModel';

const getAllSpeeds = async (): Promise<ISpeed[]> => {
  try {
    return await prisma.speed.findMany();
  } catch (error) {
    console.error('Error fetching speeds:', error);
    throw error;
  }
};

const getAllSpeedsById = async (id: number): Promise<ISpeed[]> => {
  try {
    return await prisma.speed.findMany({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error('Error fetching speeds:', error);
    throw error;
  }
};

const getAllSpeedsByRaceId = async (raceId: number): Promise<ISpeed[]> => {
  try {
    return await prisma.speed.findMany({
      where: {
        raceId,
      },
    });
  } catch (error) {
    console.error('Error fetching speeds:', error);
    throw error;
  }
};

const getSpeedByRaceId = async (raceId: number): Promise<ISpeed | null> => {
  try {
    return await prisma.speed.findFirst({
      where: { raceId },
    });
  } catch (error) {
    console.error('Error fetching speed:', error);
    throw error;
  }
};

export default {
  getAllSpeeds,
  getAllSpeedsById,
  getAllSpeedsByRaceId,
  getSpeedByRaceId,
};
