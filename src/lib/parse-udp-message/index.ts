import { ForzaKeyMapValues, FH_PACKET_SIZE, FORZA_KEY_MAP } from "./types";
import { Parser } from "binary-parser";

type UndefinedOrResponse<T> = T | undefined;
type packetParserResponse<T> = (packet: Buffer) => UndefinedOrResponse<T>;

export const packetParserFH: packetParserResponse<FORZA_KEY_MAP> = (
  packet: Buffer
) => {
  const parser = new Parser();
  const newData = Buffer.from([
    ...packet.slice(0, 232),
    ...packet.slice(244, 323),
  ]);

  ForzaKeyMapValues.forEach((forzaKey: keyof typeof FORZA_KEY_MAP) => {
    parser[FORZA_KEY_MAP[forzaKey]](forzaKey);
  });

  return parser.parse(newData);
};

const PACKET_PARSER_MAP: Record<string, packetParserResponse<FORZA_KEY_MAP>> = {
  [FH_PACKET_SIZE.toString()]: packetParserFH,
};

export const packetParser: packetParserResponse<FORZA_KEY_MAP> = (
  packet: Buffer
) => {
  if (PACKET_PARSER_MAP[(packet.toString("hex").length / 2).toString()]) {
    return packetParserFH(packet);
  } else {
    throw new Error("packet not recognized");
  }
};
