"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RaceController_1 = __importDefault(require("../controllers/RaceController"));
const route = (0, express_1.Router)();
// Method: GET
route.get('/all', RaceController_1.default.getRaces);
route.get('/:id', RaceController_1.default.getRace);
route.get('/all/sortedByDate', RaceController_1.default.getRacesSortedByDate);
exports.default = route;
