import { Express } from "express";
import { setup } from "./app";

import config from "./config";

import mqttService from "./service/mqtt";

export default async function startServer(app: Express) {
    const { port } = await setup(); // Setup app and get port
    
    try {
        mqttService.connect();
    } catch (error) {
        console.error('Error connecting to MQTT:', error);
    }
  app
    .listen(port, async () => {
        console.log(`Server listening on port ${port}`);
      
    })
    .setTimeout(config!.timeout);
}
