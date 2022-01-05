import { PACKET_SIZE, MESSAGE_MAP } from "./types";

const packetTest = Buffer.from(
  "01000000fad5cb03f6fff9459d919144346093459125a43e194bdcbd15558bbf00748d3cda45e53d2c03c241f897ac3c3b1b203af11f9ebeb9d80ac04fdb463b4b0005bc6f55053f5658f03eb193fc3e3aece33e7df09dbbfc849dbb1f4086bc2550babcb6299442cb39944236b0934258a8934200000000000000000000000000000000000000000000000000000000000000009999193f9999193f9999193f9999193f007db33cc735763c1bd99c3cac96973cb0c7b73c0f40813c0075ce3cdd30f03c70e2433c0074243bf89b703cb08ad73b2a0d000004000000380300000200000004000000220000000000000000000000dcbc6945969c35434e59f244b703c241414a96c657e41bc2b6d22d43f89e2c43c76d2843c76d2843646630c1920b763f0000000000000000000000000000000039381d43000000000000000300810000",
  "hex"
);

export const packetParser = (packet = packetTest) => {
  if (packet.toString("hex").length / 2 === PACKET_SIZE) {
    console.log("reading fh 5 packet");
    console.log("raceOn: ", packet.readInt32LE(MESSAGE_MAP.raceOn));
    console.log("engineMaxRpm: ", packet.readFloatLE(MESSAGE_MAP.engineMaxRpm));
    console.log(
      "engineIdleRpm: ",
      packet.readFloatLE(MESSAGE_MAP.engineIdleRpm)
    );
    console.log(
      "currentRPM: ",
      packet.readFloatLE(MESSAGE_MAP.currentEngineRpm)
    );
    console.log(Object.keys(MESSAGE_MAP).findIndex((x) => x === "carClass"));
    console.log("carClass: ", packet.readInt32LE(MESSAGE_MAP.carClass));
    return;
  }

  console.log(
    "not valid packet ",
    packet.toString("hex"),
    packet.toString("hex").length / 2
  );

  return;
};
