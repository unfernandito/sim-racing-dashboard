import dgram from "dgram";
import { F1TelemetryClient, constants } from "@racehub-io/f1-telemetry-client";
import { packetParser } from "./lib";

const server = dgram.createSocket("udp4");
const { PACKETS } = constants;

const client = new F1TelemetryClient({ port: 20777 });

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

server.on("message", (msg, remote: string) => {
  const packetParsed = packetParser(msg);
  // @ts-ignore
  console.log(packetParsed?.Speed, remote);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
