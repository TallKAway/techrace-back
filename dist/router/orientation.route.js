"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrientationController_1 = __importDefault(require("../controllers/OrientationController"));
const route = (0, express_1.Router)();
// Method: GET
route.get('/all', OrientationController_1.default.getOrientations);
route.get('/all/:id', OrientationController_1.default.getOrientationsById);
route.get('/all/race/:id', OrientationController_1.default.getOrientationsByRaceId);
exports.default = route;
