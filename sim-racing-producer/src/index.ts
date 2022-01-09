import dgram from "dgram";
import { F1TelemetryClient, constants } from "@racehub-io/f1-telemetry-client";
import {
  ArrayPacketParsed,
  globalPacketParsed,
  PacketTopic,
  producer,
} from "@lib";
import logger from "@lib/logger";

const { PACKETS } = constants;

let messages: ArrayPacketParsed = [];

async function main() {
  try {
    await producer.connect();

    if (process.env.FH_LISTEN === "true") {
      const server = dgram.createSocket("udp4");

      server.on("error", (err: Error) => {
        logger.error(`server error:\n${err.stack}`);
        server.close();
      });

      server.on("message", (msg, remote) => {
        globalPacketParsed(msg, remote, messages);

        if (
          messages.length === Number(process.env.QUEUE_MESSAGES_QTY ?? "60")
        ) {
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
      server.bind(Number(process.env.PORT_FH ?? "41234"));
    }

    // to start listening:
    if (process.env.F1_LISTEN === "true") {
      const client = new F1TelemetryClient({
        port: 20777,
      });
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

      client.start();
    }
  } catch (err) {
    logger.error(err);
  }
}

main().then(logger.info).catch(logger.error);
