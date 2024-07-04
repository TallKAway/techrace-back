import { prisma } from '../utils/database';

async function getAllRaces() {
  try {
    return await prisma.race.findMany();
  } catch (error) {
    console.error('Error fetching races:', error);
    throw error;
  }
}

export default {
  getAllRaces,
};
