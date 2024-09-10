"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SpeedController_1 = __importDefault(require("../controllers/SpeedController"));
const route = (0, express_1.Router)();
// Method: GET
route.get('/all', SpeedController_1.default.getSpeeds);
route.get('/:id', SpeedController_1.default.getSpeedById);
route.get('/race/:id', SpeedController_1.default.getSpeedByRaceId);
exports.default = route;
