"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_1 = require("jest-mock");
const SpeedController_1 = __importDefault(require("../controllers/SpeedController"));
const SpeedRepository_1 = __importDefault(require("../repository/SpeedRepository"));
jest.mock('../repository/SpeedRepository');
describe('SpeedController', () => {
    let req;
    let res;
    // Helper function to generate mock data for speeds
    const mockSpeedData = () => ({
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
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
    describe('getSpeeds', () => {
        it('should return all speeds', () => __awaiter(void 0, void 0, void 0, function* () {
            const speeds = [mockSpeedData(), mockSpeedData()];
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getAllSpeeds).mockResolvedValue(speeds);
            yield SpeedController_1.default.getSpeeds(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: speeds,
            });
        }));
        it('should return an error if getAllSpeeds throws an error', () => __awaiter(void 0, void 0, void 0, function* () {
            const error = new Error('An error occurred');
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getAllSpeeds).mockRejectedValue(error);
            yield SpeedController_1.default.getSpeeds(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        }));
    });
    describe('getSpeedById', () => {
        it('should return a speed by id', () => __awaiter(void 0, void 0, void 0, function* () {
            const speed = mockSpeedData();
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getSpeedById).mockResolvedValue(speed);
            yield SpeedController_1.default.getSpeedById(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: speed,
            });
        }));
        it('should return an error if getSpeedById throws an error', () => __awaiter(void 0, void 0, void 0, function* () {
            const error = new Error('An error occurred');
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getSpeedById).mockRejectedValue(error);
            yield SpeedController_1.default.getSpeedById(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        }));
    });
    describe('getSpeedByRaceId', () => {
        it('should return a speed by race id', () => __awaiter(void 0, void 0, void 0, function* () {
            const speed = mockSpeedData();
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getSpeedByRaceId).mockResolvedValue(speed);
            yield SpeedController_1.default.getSpeedByRaceId(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                status: 'success',
                data: speed,
            });
        }));
        it('should return an error if getSpeedByRaceId throws an error', () => __awaiter(void 0, void 0, void 0, function* () {
            const error = new Error('An error occurred');
            (0, jest_mock_1.mocked)(SpeedRepository_1.default.getSpeedByRaceId).mockRejectedValue(error);
            yield SpeedController_1.default.getSpeedByRaceId(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        }));
    });
});
