"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Authentication',
            version: '1.0.0',
            description: 'Documentation for the Techrace API',
        },
        tags: [
            { name: 'Orientation', description: 'Operations related to orientation records' },
            { name: 'Race', description: 'Operations related to races' },
            { name: 'Speed', description: 'Operations related to speed records' },
        ],
    },
    apis: ['./docs/swagger/*.ts'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
