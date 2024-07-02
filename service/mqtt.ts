import mqtt from 'mqtt';

class MqttService {
    private client: mqtt.MqttClient;

    constructor() {
        this.client = mqtt.connect('mqtt://localhost:1883');
    }

    public connect() {
        this.client.on('connect', () => {
            console.log('MQTT connected');
            this.client.subscribe('test');
        });
    }

    public publish(topic: string, message: string) {
        this.client.publish(topic, message);
        this.client.end();
    }
}
const mqttService = new MqttService();
export default mqttService;
