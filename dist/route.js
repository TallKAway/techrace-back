"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const race_route_1 = __importDefault(require("./router/race.route"));
const speed_route_1 = __importDefault(require("./router/speed.route"));
const orientation_route_1 = __importDefault(require("./router/orientation.route"));
const securityMiddleware_1 = require("./middleware/securityMiddleware");
const apiRouter = (0, express_1.Router)();
apiRouter.use(securityMiddleware_1.apiKeyMiddleware);
apiRouter.use('/race', race_route_1.default);
apiRouter.use('/speed', speed_route_1.default);
apiRouter.use('/orientation', orientation_route_1.default);
function setupRoutes(app) {
    app.use('/api', apiRouter);
}
exports.default = setupRoutes;
