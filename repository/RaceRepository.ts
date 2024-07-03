const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllRaces() {
  try {
    return await prisma.race.findMany();
  } catch (error) {
    console.error('Error fetching races:', error);
    throw error;
  }
}

module.exports = {
  getAllRaces,
};
