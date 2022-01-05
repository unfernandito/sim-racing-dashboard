import { packetParser , ForzaMap, PacketParsed } from "@lib";

const packetTest = Buffer.from(
  "01000000fad5cb03f6fff9459d919144346093459125a43e194bdcbd15558bbf00748d3cda45e53d2c03c241f897ac3c3b1b203af11f9ebeb9d80ac04fdb463b4b0005bc6f55053f5658f03eb193fc3e3aece33e7df09dbbfc849dbb1f4086bc2550babcb6299442cb39944236b0934258a8934200000000000000000000000000000000000000000000000000000000000000009999193f9999193f9999193f9999193f007db33cc735763c1bd99c3cac96973cb0c7b73c0f40813c0075ce3cdd30f03c70e2433c0074243bf89b703cb08ad73b2a0d000004000000380300000200000004000000220000000000000000000000dcbc6945969c35434e59f244b703c241414a96c657e41bc2b6d22d43f89e2c43c76d2843c76d2843646630c1920b763f0000000000000000000000000000000039381d43000000000000000300810000",
  "hex"
);

const packetBadValue = Buffer.from("01000000", "hex");
const DATE_NOW = 1487076708000;

const PACKET_TEST_PARSED = {
  key: `fh_${DATE_NOW}`,
  timestamp: DATE_NOW,
  message: {
    "Accel": 0,
    "AccelerationX": 0.32059910893440247,
    "AccelerationY": -0.10756511241197586,
    "AccelerationZ": -1.0885339975357056,
    "AngularVelocityX": 0.02106855809688568,
    "AngularVelocityY": 0.0006107573281042278,
    "AngularVelocityZ": -0.3088374435901642,
    "BestLap": 0,
    "Boost": -11.02499771118164,
    "Brake": 0,
    "CarClass": 4,
    "CarOrdinal": 3370,
    "CarPerformanceIndex": 824,
    "Clutch": 0,
    "CurrentEngineRpm": 4716.025390625,
    "CurrentLap": 0,
    "CurrentRaceTime": 157.21961975097656,
    "DistanceTraveled": 0,
    "DrivetrainType": 2,
    "EngineIdleRpm": 1164.5504150390625,
    "EngineMaxRpm": 7999.9951171875,
    "Fuel": 0.9611140489578247,
    "Gear": 3,
    "HandBrake": 0,
    "IheelOnRumbleStripFrontLeft": 0,
    "IheelOnRumbleStripFrontRight": 0,
    "IheelOnRumbleStripRearLeft": 0,
    "IheelOnRumbleStripRearRight": 0,
    "IsRaceOn": 1,
    "LapNumber": 0,
    "LastLap": 0,
    "NormalizedAIBrakeDifference": 0,
    "NormalizedDrivingLine": -127,
    "NormalizedSuspensionTravelFrontLeft": 0.5208348631858826,
    "NormalizedSuspensionTravelFrontRight": 0.46942394971847534,
    "NormalizedSuspensionTravelRearLeft": 0.49331429600715637,
    "NormalizedSuspensionTravelRearRight": 0.4451616406440735,
    "NumCylinders": 4,
    "Pitch": 0.003034312045201659,
    "PositionX": 3739.8037109375,
    "PositionY": 181.61166381835938,
    "PositionZ": 1938.790771484375,
    "Power": -19237.126953125,
    "RacePosition": 0,
    "Roll": -0.008117745630443096,
    "Speed": 24.251813888549805,
    "Steer": 0,
    "SurfaceRumbleFrontLeft": 0.5999999642372131,
    "SurfaceRumbleFrontRight": 0.5999999642372131,
    "SurfaceRumbleRearLeft": 0.5999999642372131,
    "SurfaceRumbleRearRight": 0.5999999642372131,
    "SuspensionTravelMetersFrontLeft": 0.01195584237575531,
    "SuspensionTravelMetersFrontRight": 0.0025093555450439453,
    "SuspensionTravelMetersRearLeft": 0.014685623347759247,
    "SuspensionTravelMetersRearRight": 0.006577812135219574,
    "TimestampMS": 63690234,
    "TireCombinedSlipFrontLeft": 0.022434085607528687,
    "TireCombinedSlipFrontRight": 0.01577761583030224,
    "TireCombinedSlipRearLeft": 0.025202274322509766,
    "TireCombinedSlipRearRight": 0.02932017482817173,
    "TireSlipAngleFrontLeft": 0.02191019058227539,
    "TireSlipAngleFrontRight": 0.015027469955384731,
    "TireSlipAngleRearLeft": 0.019146492704749107,
    "TireSlipAngleRearRight": 0.018504463136196136,
    "TireSlipRatioFrontLeft": -0.004819928202778101,
    "TireSlipRatioFrontRight": -0.004807112738490105,
    "TireSlipRatioRearLeft": -0.016387997195124626,
    "TireSlipRatioRearRight": -0.02274329401552677,
    "TireTempFrontLeft": 173.82308959960938,
    "TireTempFrontRight": 172.6209716796875,
    "TireTempRearLeft": 168.42881774902344,
    "TireTempRearRight": 168.42881774902344,
    "Torque": -38.97298812866211,
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    "VelocityX": 0.017267227172851562,
    "VelocityY": 0.11194963753223419,
    "VelocityZ": 24.251548767089844,
    "WheelInPuddleDepthFrontLeft": 0,
    "WheelInPuddleDepthFrontRight": 0,
    "WheelInPuddleDepthRearLeft": 0,
    "WheelInPuddleDepthRearRight": 0,
    "WheelRotationSpeedFrontLeft": 74.08146667480469,
    "WheelRotationSpeedFrontRight": 74.11287689208984,
    "WheelRotationSpeedRearLeft": 73.84416198730469,
    "WheelRotationSpeedRearRight": 73.82879638671875,
    "Yaw": -2.169477701187134,
  },
  topic: "FH"
};

describe("packetParserV2 suite test", () => {
  let packetParserResult: PacketParsed<ForzaMap | undefined> | undefined;

  beforeAll(() => {
    Date.now = jest.fn(() => DATE_NOW);
    packetParserResult = packetParser(packetTest);
  });

  it("should return a valid forza horizon packet parsed", () => {
    expect(packetParserResult).toMatchObject(PACKET_TEST_PARSED);
  });

  it("should accept a buffer valid from forza horizon 5", () => {
    expect(packetParserResult).toMatchSnapshot();
  });

  it("should return an error if not receive a valid packet", () => {
    Date.now = jest.fn(() => DATE_NOW);
    expect(() => packetParser(packetBadValue)).toThrow();
  });

  it("should return an error if not receive a packet", () => {
    Date.now = jest.fn(() => DATE_NOW);
    expect(() => packetParser(Buffer.from("", "hex"))).toThrow();
  });
});

