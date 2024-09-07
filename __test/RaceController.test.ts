import { Request, Response } from 'express';
import { mocked } from 'jest-mock';
import RaceController from '../controllers/RaceController';
import RaceRepository from '../repository/RaceRepository';
import { IRace } from '../models/RaceModel';

jest.mock('../repository/RaceRepository');

describe('RaceController', () => {
    let req: Request;
    let res: Response & { json: jest.Mock; status: jest.Mock };

    const mockRaceData = (): IRace => (
        {
            id: 1,
            timestamp: new Date(),
            start_Time: new Date(),
            end_Time: new Date(),
            distance: 1500,
            speeds: [
                {
                    id: 4,
                    speeds: [
                        {
                            date: '2024-07-11 18:00:00',
                            speed: 20
                        },
                        {
                            date: '2024-07-11 18:15:00',
                            speed: 25
                        }
                    ],
                    max_Speed: 25,
                    average_Speed: 22.5,
                    timestamp: new Date(),
                    raceId: 4
                }
            ],
            battery: []
        }
    );

    beforeEach(() => {
        req = {
            params: { id: '1' },
        } as unknown as Request;

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response & { json: jest.Mock; status: jest.Mock };
    });

    describe('getRaces', () => {
        it('should return all races', async () => {
          const races = [mockRaceData(), mockRaceData()];
    
          mocked(RaceRepository.getAllRaces).mockResolvedValue(races);
    
          await RaceController.getRaces(req, res);
    
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith({
            status: 'success',
            data: races,
          });
        });
    
        it('should return an error if getAllRaces throws an error', async () => {
          const error = new Error('An error occurred');
          mocked(RaceRepository.getAllRaces).mockRejectedValue(error);
    
          await RaceController.getRaces(req, res);
    
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('getRace', () => {
        it('should return a race by id', async () => {
          const race = mockRaceData();
    
          mocked(RaceRepository.getRaceById).mockResolvedValue(race);
    
          await RaceController.getRace(req, res);
    
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith({
            status: 'success',
            data: race,
          });
        });
    
        it('should return an error if getRaceById throws an error', async () => {
          const error = new Error('An error occurred');
          mocked(RaceRepository.getRaceById).mockRejectedValue(error);
    
          await RaceController.getRace(req, res);
    
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
      });    
    
    describe('getRacesSortedByDate', () => {
        it('should return all races sorted by date', async () => {
            const races = [mockRaceData(), mockRaceData()];
    
            mocked(RaceRepository.getAllRaces).mockResolvedValue(races);
    
            await RaceController.getRacesSortedByDate(req, res);
    
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: expect.any(Array),
            });
    
            const responseData = res.json.mock.calls[0][0].data;
            expect(responseData[0]).toHaveProperty('date');
            expect(responseData[0]).toHaveProperty('races');
            expect(responseData[0].races).toEqual(expect.any(Array));
        });
    
        it('should return an error if getAllRaces throws an error', async () => {
            const error = new Error('An error occurred');
            mocked(RaceRepository.getAllRaces).mockRejectedValue(error);
    
            await RaceController.getRacesSortedByDate(req, res);
    
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });
});

