import { ArrayPacketParsed, packetParser } from "@lib";
import { FHMessageType } from "@lib/parse-udp-message/avro";
import { RemoteInfo } from "dgram";

export const globalPacketParsed = (
  msg: Buffer,
  remote: RemoteInfo,
  messages: ArrayPacketParsed
): void => {
  const packetParsed = packetParser(msg);

  if (packetParsed?.message?.IsRaceOn === 1) {
    messages.push({
      key: packetParsed.key,
      value: FHMessageType.toBuffer({
        ...packetParsed.message,
        timestamp: packetParsed.timestamp,
        remote,
      }),
    });
  }
};
