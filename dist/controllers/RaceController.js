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
const RaceRepository_1 = __importDefault(require("../repository/RaceRepository"));
const getRaces = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const races = yield RaceRepository_1.default.getAllRaces();
        res.status(200).json({
            status: 'success',
            data: races,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
});
const getRace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const race = yield RaceRepository_1.default.getRaceById(Number(id));
        res.status(200).json({
            status: 'success',
            data: race,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
});
const getRacesSortedByDate = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const races = yield RaceRepository_1.default.getAllRaces();
        const racesSortedByDate = groupByDate(races);
        res.status(200).json({
            status: 'success',
            data: racesSortedByDate,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
});
const groupByDate = (races) => {
    const groupedRaces = {};
    races.forEach((race) => {
        const date = race.start_Time.toISOString().split('T')[0];
        if (!groupedRaces[date]) {
            groupedRaces[date] = [];
        }
        groupedRaces[date].push(race);
    });
    return Object.keys(groupedRaces).map((date) => ({
        date,
        races: groupedRaces[date],
    }));
};
exports.default = {
    getRaces,
    getRace,
    getRacesSortedByDate,
};
