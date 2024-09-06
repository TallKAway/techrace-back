import { Request, Response } from 'express';
import { mocked } from 'jest-mock';
import SpeedController from '../controllers/SpeedController';
import SpeedRepository from '../repository/SpeedRepository';
import { ISpeed } from '../models/SpeedModel';

jest.mock('../repository/SpeedRepository');

describe('SpeedController', () => {
  let req: Request;
  let res: Response;

  // Helper function to generate mock data for speeds
  const mockSpeedData = (): ISpeed => ({
    id: 1,
    speeds: [
      {
        date: '2024-07-13T19:53:23.860Z',
        speed: 1.020506501,
      },
      {
        date: '2024-07-13T19:53:23.860Z',
        speed: 1.020506501,
      },
    ],
    average_Speed: 15,
    max_Speed: 20,
    timestamp: new Date(),
    raceId: 1,
  });

  beforeEach(() => {
    // Mock req and res objects
    req = {
      params: { id: '1' },
    } as unknown as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });

  describe('getSpeeds', () => {
    it('should return all speeds', async () => {
      const speeds = [mockSpeedData(), mockSpeedData()];

      mocked(SpeedRepository.getAllSpeeds).mockResolvedValue(speeds);

      await SpeedController.getSpeeds(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: speeds,
      });
    });

    it('should return an error if getAllSpeeds throws an error', async () => {
      const error = new Error('An error occurred');
      mocked(SpeedRepository.getAllSpeeds).mockRejectedValue(error);

      await SpeedController.getSpeeds(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('getSpeedById', () => {
    it('should return a speed by id', async () => {
      const speed = mockSpeedData();

      mocked(SpeedRepository.getSpeedById).mockResolvedValue(speed);

      await SpeedController.getSpeedById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: speed,
      });
    });

    it('should return an error if getSpeedById throws an error', async () => {
      const error = new Error('An error occurred');
      mocked(SpeedRepository.getSpeedById).mockRejectedValue(error);

      await SpeedController.getSpeedById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('getSpeedByRaceId', () => {
    it('should return a speed by race id', async () => {
      const speed = mockSpeedData();

      mocked(SpeedRepository.getSpeedByRaceId).mockResolvedValue(speed);

      await SpeedController.getSpeedByRaceId(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: speed,
      });
    });

    it('should return an error if getSpeedByRaceId throws an error', async () => {
      const error = new Error('An error occurred');
      mocked(SpeedRepository.getSpeedByRaceId).mockRejectedValue(error);

      await SpeedController.getSpeedByRaceId(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
});
