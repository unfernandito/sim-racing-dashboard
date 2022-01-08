import dgram from "dgram";
import { F1TelemetryClient, constants } from "@racehub-io/f1-telemetry-client";
import {
  ArrayPacketParsed,
  globalPacketParsed,
  packetParser,
  PacketTopic,
  producer,
} from "@lib";
import logger from "@lib/logger";

const { PACKETS } = constants;

let messages: ArrayPacketParsed = [];

async function main() {
  await producer.connect();

  // to start listening:
  if (process.env.F1_LISTEN === "true") {
    const client = new F1TelemetryClient({
      port: 20777,
    });
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

    client.start();
  }

  if (process.env.FH_LISTEN === "true") {
    const server = dgram.createSocket("udp4");

    server.on("error", (err: Error) => {
      logger.error(`server error:\n${err.stack}`);
      server.close();
    });

    server.on("message", (msg, remote) => {
      globalPacketParsed(msg, remote, messages);

      if (messages.length === Number(process.env.QUEUE_MESSAGES_QTY ?? "60")) {
        producer
          .send({
            topic: PacketTopic.FH,
            messages,
            timeout: 2000,
          })
          .then((responses) => {
            logger.info("Published message", {
              responses,
            });
          })
          .catch(logger.error);

        messages = [];
      }
    });

    server.on("listening", () => {
      const address = server.address();
      logger.info(`server listening ${address.address}:${address.port}`);
    });
    server.bind(41234);
  }
}

main().catch(logger.error);
