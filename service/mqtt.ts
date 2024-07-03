import mqtt from 'mqtt';
import ActionsController from '../controllers/ActionsController';

class MqttService {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect('mqtt://localhost:1883');
  }

  // Fonction pour se connecter au broker MQTT
  public connect() {
    this.client.on('connect', () => {
      console.log('MQTT connected');
      this.subscribeToTopic(['test1', 'test2']);
    });
  }

  // Fonction pour s'abonner à un topic spécifique
  private subscribeToTopic(topics: string[]) {
    this.client.subscribe(topics, (err) => {
      if (err) {
        console.error(`Failed to subscribe to topic ${topics}:`, err);
      } else {
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
  public publish(topic: string, message: string) {
    this.client.publish(topic, message, (err) => {
      if (err) {
        console.error(`Failed to publish message to topic ${topic}:`, err);
      } else {
        console.log(`Message published to topic ${topic}`);
        this.handleMessage(topic, message);
      }
    });
  }

  // Fonction pour gérer les messages et appeler l'ActionsController
  private handleMessage(topic: string, message: string) {
    ActionsController.eventAction(topic, message);
  }

  // Fonction pour fermer la connexion MQTT
  public endConnection() {
    this.client.end(() => {
      console.log('MQTT connection closed');
    });
  }
}

const mqttService = new MqttService();
export default mqttService;
