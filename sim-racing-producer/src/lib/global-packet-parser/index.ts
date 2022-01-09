import { ArrayPacketParsed, packetParser } from "@lib";
import { FHMessageType } from "@lib/parse-udp-message/avro";
import { RemoteInfo } from "dgram";
import logger from "@lib/logger";

const encodeFunction = (msg: any, schemaId: number): Buffer => {
  const encodedMessage = FHMessageType.toBuffer(msg);

  const message = Buffer.alloc(encodedMessage.length + 5);
  message.writeUInt8(0);
  message.writeUInt32BE(schemaId, 1);
  encodedMessage.copy(message, 5);

  return message;
};

export const globalPacketParsed = (
  msg: Buffer,
  remote: RemoteInfo,
  messages: ArrayPacketParsed
): void => {
  const packetParsed = packetParser(msg);
  logger.debug("proccessing message");

  if (packetParsed?.message?.IsRaceOn === 1) {
    messages.push({
      key: packetParsed.key,
      version: "latest",
      subject: packetParsed.topic + "-subject",
      value: encodeFunction(
        {
          ...packetParsed.message,
          timestamp: packetParsed.timestamp,
          remote,
        },
        5
      ),
    });
  }
};
