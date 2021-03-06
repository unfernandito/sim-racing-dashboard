import { Parser } from "binary-parser";
import {
  ForzaKeyMapValues,
  FH_PACKET_SIZE,
  FORZA_KEY_MAP,
  PacketParsed,
  PacketTopic,
  ForzaMap,
} from "./types";

export * from "./types";
export * from "./avro";

type UndefinedOrResponse<T> = T | undefined;
type packetParserResponse<T> = (
  packet: Buffer
) => PacketParsed<UndefinedOrResponse<T>> | undefined;

export const packetParserFH: packetParserResponse<ForzaMap> = (
  packet: Buffer
) => {
  const timestamp = Date.now();
  const parser = new Parser();
  const newData = Buffer.from([
    ...packet.slice(0, 232),
    ...packet.slice(244, 323),
  ]);

  ForzaKeyMapValues.forEach((forzaKey) => {
    parser[FORZA_KEY_MAP[forzaKey as keyof typeof FORZA_KEY_MAP]](forzaKey);
  });

  const key = `fh_${timestamp.toString()}`;

  return {
    key,
    topic: PacketTopic.FH,
    message: { id: key, ...parser.parse(newData) },
    timestamp,
  };
};

const PACKET_PARSER_MAP: Record<string, packetParserResponse<ForzaMap>> = {
  [FH_PACKET_SIZE.toString()]: packetParserFH,
};

export const packetParser: packetParserResponse<ForzaMap> = (
  packet: Buffer
) => {
  if (PACKET_PARSER_MAP[(packet.toString("hex").length / 2).toString()]) {
    try {
      const packetParsed =
        PACKET_PARSER_MAP[(packet.toString("hex").length / 2).toString()]?.(
          packet
        );

      return packetParsed;
    } catch (error) {
      throw new Error(`packet not recognized, ${error}`);
    }
  } else {
    throw new Error(`packet not recognized`);
  }
};
