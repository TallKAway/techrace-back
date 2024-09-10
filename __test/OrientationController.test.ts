import { Request, Response } from 'express';
import { mocked } from 'jest-mock';
import OrientationController from '../controllers/OrientationController';
import OrientationRepository from '../repository/OrientationRepository';
import { IOrientation } from '../models/OrientationModel';

jest.mock('../repository/OrientationRepository');

describe('OrientationController', () => {
    let req: Request;
    let res: Response;

    const mockOrientationData = (): IOrientation => ({
        id: 1,
        timestamp: new Date(),
        orientation: 'NORTH',
        speed: 20,
        raceId: 1,
    });

    beforeEach(() => {
        req = {
            params: { id: '1' },
        } as unknown as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;
    });

    describe('getOrientations', () => {
        it('should return all orientations', async () => {
            const orientations = [mockOrientationData(), mockOrientationData()];

            mocked(OrientationRepository.getAllOrientations).mockResolvedValue(orientations);

            await OrientationController.getOrientations(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: orientations,
            });
        });

        it('should return an error if getAllOrientations throws an error', async () => {
            const error = new Error('An error occurred');
            mocked(OrientationRepository.getAllOrientations).mockRejectedValue(error);

            await OrientationController.getOrientations(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('getOrientationsById', () => {
        it('should return a orientation by id', async () => {
            const orientation = mockOrientationData();

            mocked(OrientationRepository.getAllOrientationsById).mockResolvedValue([orientation]);


            await OrientationController.getOrientationsById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: [orientation],
            });
        });

        it('should return an error if getAllOrientationsById throws an error', async () => {
            const error = new Error('An error occurred');
            mocked(OrientationRepository.getAllOrientationsById).mockRejectedValue(error);

            await OrientationController.getOrientationsById(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('getOrientationsByRaceId', () => {
        it('should return a getOrientationsByRaceId by race id', async () => {
            const orientation = mockOrientationData();
            mocked(OrientationRepository.getAllOrientationsByRaceId).mockResolvedValue([orientation]); 


            await OrientationController.getOrientationsByRaceId(req, res);
            
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: [orientation],
            });
        });

        it('should return an error if getAllOrientationsByRaceId throws an error', async () => {
            const error = new Error('An error occurred');
            mocked(OrientationRepository.getAllOrientationsByRaceId).mockRejectedValue(error);

            await OrientationController.getOrientationsByRaceId(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });
});
