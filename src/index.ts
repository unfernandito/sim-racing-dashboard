import dgram from "dgram";
import { F1TelemetryClient, constants } from "@racehub-io/f1-telemetry-client";
import { packetParser } from "./lib";
import { producer } from './lib/kafka-client/index';

const { PACKETS } = constants;

async function main(){
  try{
  const server = dgram.createSocket("udp4");
  const client = new F1TelemetryClient({ port: 20777 });
  await producer.connect();

  client.on(PACKETS.event, console.log);
  client.on(PACKETS.motion, console.log);
  client.on(PACKETS.carSetups, console.log);
  client.on(PACKETS.lapData, console.log);
  client.on(PACKETS.session, console.log);
  client.on(PACKETS.participants, console.log);
  client.on(PACKETS.carTelemetry, console.log);
  client.on(PACKETS.carStatus, console.log);
  client.on(PACKETS.finalClassification, console.log);
  client.on(PACKETS.lobbyInfo, console.log);
  client.on(PACKETS.carDamage, console.log);
  client.on(PACKETS.sessionHistory, console.log);

  // to start listening:
  client.start();

  server.on("error", (err: Error) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  });

  let messages = new Array();

  server.on("message", async (msg, remote: string) => {
    
    const packetParsed = packetParser(msg);
    
    if(packetParsed){
      if(packetParsed.message){
      if(packetParsed.message.IsRaceOn === 1){
        messages.push({
          key: packetParsed.name,
          value: JSON.stringify({...packetParsed.message, remote})
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

          console.log('Published message', { responses })
        })
        .catch(console.error)

        messages = new Array()
      
      }
  }

  });

  server.on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });

  server.bind(41234);
}catch(error){
  throw error;
}
}

main()
.catch(console.error);