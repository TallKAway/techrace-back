import { prisma } from '../utils/database';
import { IOrientation } from '../models/OrientationModel';

const getAllOrientations = async (): Promise<IOrientation[]> => {
  try {
    return await prisma.orientationRecord.findMany();
  } catch (error) {
    console.error('Error fetching orientations:', error);
    throw error;
  }
};

const getAllOrientationsById = async (id: number): Promise<IOrientation[]> => {
  try {
    return await prisma.orientationRecord.findMany({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error('Error fetching orientations:', error);
    throw error;
  }
};

const getAllOrientationsByRaceId = async (raceId: number): Promise<IOrientation[]> => {
  try {
    return await prisma.orientationRecord.findMany({
      where: {
        raceId,
      },
    });
  } catch (error) {
    console.error('Error fetching orientations:', error);
    throw error;
  }
};

export default {
  getAllOrientations,
  getAllOrientationsById,
  getAllOrientationsByRaceId,
};
