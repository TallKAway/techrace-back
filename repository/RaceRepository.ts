import { prisma } from '../utils/database';
import { IRace } from '../models/RaceModel';
import { JsonArray, JsonValue } from '@prisma/client/runtime/library';

const getAllRaces = async (): Promise<IRace[]> => {
  try {
    return await prisma.race.findMany({
      orderBy: {
        start_Time: 'desc',
      },
      include: {
        speeds: true,
        battery: true,
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
        speeds: true,
        battery: true,
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

export const createRace = async (data: IRace): Promise<IRace | null> => {
  try {
    return await prisma.race.create({
      data: {
        distance: data.distance || 0,
        start_Time: data.start_Time,
        end_Time: data.end_Time,
        speeds: {
          create: data.speeds?.map((speed) => ({
            timestamp: speed.timestamp,
            speeds: speed.speeds as any,
            average_Speed: speed.average_Speed,
            max_Speed: speed.max_Speed,
          })),
        },
        battery: {
          create: data.battery?.map((battery) => ({
            battery_consumed: battery.battery_consumed,
            battery_level: battery.battery_level as any,
            start_voltage: battery.start_voltage,
            end_voltage: battery.end_voltage,
          })),
        },
      },
    });
  } catch (error) {
    console.error('Error creating race:', error);
    throw error;
  }
};

export default {
  getAllRaces,
  getRaceById,
  createRace,
};
