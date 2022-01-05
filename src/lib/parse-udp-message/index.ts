import { ForzaKeyMapValues, FH_PACKET_SIZE, FORZA_KEY_MAP, PacketParsed, PacketTopic, ForzaMap } from './types';
import { Parser } from "binary-parser";

type UndefinedOrResponse<T> = T | undefined;
type packetParserResponse<T> = (packet: Buffer) => PacketParsed<UndefinedOrResponse<T>>;

export const packetParserFH: packetParserResponse<ForzaMap> = (
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

  return { name: "fh_"+Date.now().toString(), topic: PacketTopic.FH, message: parser.parse(newData) };
};

const PACKET_PARSER_MAP: Record<string, packetParserResponse<ForzaMap>> = {
  [FH_PACKET_SIZE.toString()]: packetParserFH,
};

export const packetParser: packetParserResponse<ForzaMap> = (
  packet: Buffer
) => {
  try{
    const packetParsed = PACKET_PARSER_MAP[(packet.toString("hex").length / 2).toString()]?.(packet);
    
    return packetParsed;
  } catch(error){
    throw new Error("packet not recognized, " + error);
  }
};
