"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = __importDefault(require("mqtt"));
const ActionsController_1 = __importDefault(require("../controllers/ActionsController"));
class MqttService {
    constructor() {
        this.client = mqtt_1.default.connect('mqtt://192.168.0.100:1883');
    }
    // Fonction pour se connecter au broker MQTT
    connect() {
        this.client.on('connect', () => {
            console.log('MQTT connected');
            this.subscribeToTopic([
                'esp32/track',
                'esp32/sonar',
                'esp32/light',
                'esp32/graph/battery',
                'esp32/graph/speed',
                'esp32/battery/voltage',
                'esp32/battery/percentage',
                'esp32/statistics/speed',
                'esp32/statistics/distance',
                'esp32/race/status',
            ]);
        });
    }
    // Fonction pour s'abonner à un topic spécifique
    subscribeToTopic(topics) {
        this.client.subscribe(topics, (err) => {
            if (err) {
                console.error(`Failed to subscribe to topic ${topics}:`, err);
            }
            else {
                console.log(`Subscribed to topic ${topics}`);
            }
        });
        this.client.on('message', (receivedTopic, message) => {
            if (topics.includes(receivedTopic)) {
                this.handleMessage(receivedTopic, message.toString());
            }
        });
    }
    // Fonction pour publier un message à un topic spécifique
    publish(topic, message) {
        this.client.publish(topic, message, (err) => {
            if (err) {
                console.error(`Failed to publish message to topic ${topic}:`, err);
            }
            else {
                console.log(`Message published to topic ${topic}`);
                this.handleMessage(topic, message);
            }
        });
    }
    // Fonction pour gérer les messages et appeler l'ActionsController
    handleMessage(topic, message) {
        ActionsController_1.default.eventAction(topic, message);
    }
    // Fonction pour fermer la connexion MQTT
    endConnection() {
        this.client.end(() => {
            console.log('MQTT connection closed');
        });
    }
}
const mqttService = new MqttService();
exports.default = mqttService;
