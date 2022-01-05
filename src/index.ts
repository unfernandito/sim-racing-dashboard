import dgram from "dgram";
import { F1TelemetryClient, constants } from "@racehub-io/f1-telemetry-client";
import { ArrayPacketParsed , packetParser , producer } from "@lib";
import logger from "@lib/logger";

const { PACKETS } = constants;
let messages: ArrayPacketParsed = [];

// eslint-disable-next-line import/prefer-default-export
export const globalPacketParsed = async (msg: Buffer, remote: string): Promise<void> => {
  const packetParsed = packetParser(msg);
    
  if(packetParsed){
    if(packetParsed.message){
      if(packetParsed.message.IsRaceOn === 1){
        messages.push({
          key: packetParsed.key,
          value: JSON.stringify({
            ...packetParsed.message, 
            timestamp: packetParsed.timestamp, 
            remote
          })
        })
      }
    }

    if(messages.length === 60){
      producer.send({
        topic: packetParsed.topic,
        messages,
        timeout: 2000,
      })
      .then((responses) => {
        logger.info('Published message', { responses })
      })
      .catch(logger.error)

      messages = []  
    }
  }
}

async function main(){
  const server = dgram.createSocket("udp4");
  const client = new F1TelemetryClient({ port: 20777 });
  await producer.connect();

  client.on(PACKETS.event, logger.log);
  client.on(PACKETS.motion, logger.log);
  client.on(PACKETS.carSetups, logger.log);
  client.on(PACKETS.lapData, logger.log);
  client.on(PACKETS.session, logger.log);
  client.on(PACKETS.participants, logger.log);
  client.on(PACKETS.carTelemetry, logger.log);
  client.on(PACKETS.carStatus, logger.log);
  client.on(PACKETS.finalClassification, logger.log);
  client.on(PACKETS.lobbyInfo, logger.log);
  client.on(PACKETS.carDamage, logger.log);
  client.on(PACKETS.sessionHistory, logger.log);

  // to start listening:
  client.start();

  server.on("error", (err: Error) => {
    logger.error(`server error:\n${err.stack}`);
    server.close();
  });
  
  server.on("message", globalPacketParsed);

  server.on("listening", () => {
    const address = server.address();
    logger.info(`server listening ${address.address}:${address.port}`);
  });

  server.bind(41234);
}

main()
.catch(logger.error);