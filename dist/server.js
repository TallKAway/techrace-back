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
const app_1 = require("./app");
const config_1 = __importDefault(require("./config"));
const mqtt_1 = __importDefault(require("./service/mqtt"));
function startServer(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const { port } = yield (0, app_1.setup)(); // Setup app and get port
        try {
            mqtt_1.default.connect();
        }
        catch (error) {
            console.error('Error connecting to MQTT:', error);
        }
        app
            .listen(port, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Server listening on port ${port}`);
        }))
            .setTimeout(config_1.default.timeout);
    });
}
exports.default = startServer;
