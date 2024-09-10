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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRace = void 0;
const database_1 = require("../utils/database");
const getAllRaces = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.prisma.race.findMany({
            orderBy: {
                start_Time: 'desc',
            },
            include: {
                speeds: true,
                battery: true,
            },
        });
    }
    catch (error) {
        console.error('Error fetching races:', error);
        throw error;
    }
});
const getRaceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const race = yield database_1.prisma.race.findUnique({
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
    }
    catch (error) {
        console.error('Error fetching race:', error);
        throw error;
    }
});
const createRace = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        return yield database_1.prisma.race.create({
            data: {
                distance: data.distance || 0,
                start_Time: data.start_Time,
                end_Time: data.end_Time,
                speeds: {
                    create: (_a = data.speeds) === null || _a === void 0 ? void 0 : _a.map((speed) => ({
                        timestamp: speed.timestamp,
                        speeds: speed.speeds,
                        average_Speed: speed.average_Speed,
                        max_Speed: speed.max_Speed,
                    })),
                },
                battery: {
                    create: (_b = data.battery) === null || _b === void 0 ? void 0 : _b.map((battery) => ({
                        battery_consumed: battery.battery_consumed,
                        battery_level: battery.battery_level,
                        start_voltage: battery.start_voltage,
                        end_voltage: battery.end_voltage,
                    })),
                },
            },
        });
    }
    catch (error) {
        console.error('Error creating race:', error);
        throw error;
    }
});
exports.createRace = createRace;
exports.default = {
    getAllRaces,
    getRaceById,
    createRace: exports.createRace,
};
