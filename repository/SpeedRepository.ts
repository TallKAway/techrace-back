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

export default {
  getAllSpeeds,
  getAllSpeedsById,
};
