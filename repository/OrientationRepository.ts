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

export default {
  getAllOrientations,
};
