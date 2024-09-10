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
const OrientationRepository_1 = __importDefault(require("../repository/OrientationRepository"));
const getOrientations = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orientations = yield OrientationRepository_1.default.getAllOrientations();
        res.status(200).json({
            status: 'success',
            data: orientations,
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
const getOrientationsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const orientations = yield OrientationRepository_1.default.getAllOrientationsById(Number(id));
        res.status(200).json({
            status: 'success',
            data: orientations,
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
const getOrientationsByRaceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const orientations = yield OrientationRepository_1.default.getAllOrientationsByRaceId(Number(id));
        res.status(200).json({
            status: 'success',
            data: orientations,
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
exports.default = {
    getOrientations,
    getOrientationsById,
    getOrientationsByRaceId,
};
