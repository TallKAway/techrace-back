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
let raceData = {
    speeds: {
        timestamp: new Date(),
        speed_readings: [],
        average_speed: 0,
        max_speed: 0,
    },
    battery: {
        battery_consumed: 0,
        consumed_battery: [],
        start_voltage: 0,
        end_voltage: 0,
    },
    distance: 0,
};
let dataReceived = {
    speed: false,
    distance: false,
    battery: false,
};
function eventAction(topic, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = JSON.parse(message);
            switch (topic) {
                case 'esp32/graph/speed':
                    const baseDate = new Date();
                    data.speed_readings.forEach((speed, index) => {
                        raceData.speeds.speed_readings.push({
                            date: new Date(baseDate.getTime() + index * 60000), // incrémente la date de 1 minute pour chaque lecture
                            speed: speed,
                        });
                    });
                    raceData.speeds.average_speed = data.average_speed || 0;
                    raceData.speeds.max_speed = data.max_speed || 0;
                    dataReceived.speed = true;
                    break;
                case 'esp32/statistics/distance':
                    raceData.distance = parseFloat(message);
                    dataReceived.distance = true;
                    break;
                case 'esp32/graph/battery':
                    const batteryBaseDate = new Date();
                    data.consumed_battery.forEach((battery, index) => {
                        raceData.battery.consumed_battery.push({
                            date: new Date(batteryBaseDate.getTime() + index * 60000), // incrémente la date de 1 minute pour chaque lecture
                            battery: battery,
                        });
                    });
                    raceData.battery.start_voltage = data.start_voltage || 0;
                    raceData.battery.end_voltage = data.end_voltage || 0;
                    raceData.battery.battery_consumed = data.battery_consumed || 0;
                    dataReceived.battery = true;
                    break;
                default:
                    console.log(`Unhandled topic: ${topic}`);
                    break;
            }
            // Vérifiez si toutes les données nécessaires ont été reçues
            if (dataReceived.speed && dataReceived.distance && dataReceived.battery) {
                const formattedData = transformRaceData(raceData);
                yield RaceRepository_1.default.createRace(formattedData);
                // Réinitialisez les données après le traitement
                raceData = {
                    speeds: {
                        timestamp: new Date(),
                        speed_readings: [],
                        average_speed: 0,
                        max_speed: 0,
                    },
                    battery: {
                        battery_consumed: 0,
                        consumed_battery: [],
                        start_voltage: 0,
                        end_voltage: 0,
                    },
                    distance: 0,
                };
                dataReceived = {
                    speed: false,
                    distance: false,
                    battery: false,
                };
            }
        }
        catch (error) {
            console.error('Error in eventAction:', error);
        }
    });
}
exports.default = { eventAction };
function transformRaceData(raceData) {
    const now = new Date();
    return {
        id: 0,
        timestamp: now,
        start_Time: now,
        end_Time: now,
        distance: raceData.distance || 0,
        speeds: [
            {
                id: 0,
                speeds: raceData.speeds.speed_readings.map((s) => ({
                    date: s.date.toISOString(),
                    speed: s.speed,
                })),
                max_Speed: raceData.speeds.max_speed,
                average_Speed: raceData.speeds.average_speed,
                timestamp: raceData.speeds.timestamp,
                raceId: 0,
            },
        ],
        battery: [
            {
                id: 0,
                battery_level: raceData.battery.consumed_battery.map((b) => ({
                    date: b.date.toISOString(),
                    battery: b.battery,
                })),
                battery_consumed: raceData.battery.battery_consumed || 0,
                start_voltage: raceData.battery.start_voltage || 0,
                end_voltage: raceData.battery.end_voltage || 0,
                raceId: 0,
            },
        ],
    };
}
