export const FH_PACKET_SIZE = 324;

/**
 * UDP Datagram struct
 s32 IsRaceOn; // = 1 when race is on. = 0 when in menus/race stopped ‚Ä¶

TimestampMS; //uint32leCan overflow to 0 eventually

f32 EngineMaxRpm;
f32 EngineIdleRpm;
f32 CurrentEngineRpm;

f32 AccelerationX; //In the car's local space; X = right, Y = up, Z = forward
f32 AccelerationY;
f32 AccelerationZ;

f32 VelocityX; //In the car's local space; X = right, Y = up, Z = forward
f32 VelocityY;
f32 VelocityZ;

f32 AngularVelocityX; //In the car's local space; X = pitch, Y = yaw, Z = roll
f32 AngularVelocityY;
f32 AngularVelocityZ;

f32 Yaw;
f32 Pitch;
f32 Roll;

f32 NormalizedSuspensionTravelFrontLeft; // Suspension travel normalized= 0.0f = max stretch; 1.0 = max compression
f32 NormalizedSuspensionTravelFrontRight;
f32 NormalizedSuspensionTravelRearLeft;
f32 NormalizedSuspensionTravelRearRight;

f32 TireSlipRatioFrontLeft; // Tire normalized slip ratio, = 0 means 100% grip and |ratio| > 1.0 means loss of grip.
f32 TireSlipRatioFrontRight;
f32 TireSlipRatioRearLeft;
f32 TireSlipRatioRearRight;

f32 WheelRotationSpeedFrontLeft; // Wheel rotation speed radians/sec.
f32 WheelRotationSpeedFrontRight;
f32 WheelRotationSpeedRearLeft;
f32 WheelRotationSpeedRearRight;

s32 WheelOnRumbleStripFrontLeft; // = 1 when wheel is on rumble strip, = 0 when off.
s32 WheelOnRumbleStripFrontRight;
s32 WheelOnRumbleStripRearLeft;
s32 WheelOnRumbleStripRearRight;

f32 WheelInPuddleDepthFrontLeft; // = from 0 to 1, where 1 is the deepest puddle
f32 WheelInPuddleDepthFrontRight;
f32 WheelInPuddleDepthRearLeft;
f32 WheelInPuddleDepthRearRight;

f32 SurfaceRumbleFrontLeft; // Non-dimensional surface rumble values passed to controller force feedback
f32 SurfaceRumbleFrontRight;
f32 SurfaceRumbleRearLeft;
f32 SurfaceRumbleRearRight;

f32 TireSlipAngleFrontLeft; // Tire normalized slip angle, = 0 means 100% grip and |angle| > 1.0 means loss of grip.
f32 TireSlipAngleFrontRight;
f32 TireSlipAngleRearLeft;
f32 TireSlipAngleRearRight;

f32 TireCombinedSlipFrontLeft; // Tire normalized combined slip, = 0 means 100% grip and |slip| > 1.0 means loss of grip.
f32 TireCombinedSlipFrontRight;
f32 TireCombinedSlipRearLeft;
f32 TireCombinedSlipRearRight;

f32 SuspensionTravelMetersFrontLeft; // Actual suspension travel in meters
f32 SuspensionTravelMetersFrontRight;
f32 SuspensionTravelMetersRearLeft;
f32 SuspensionTravelMetersRearRight;

s32 CarOrdinal; //Unique ID of the car make/model
s32 CarClass; //Between 0 (D -- worst cars) and 7 (X class -- best cars) inclusive
s32 CarPerformanceIndex; //Between 100 (slowest car) and 999 (fastest car) inclusive
s32 DrivetrainType; //Corresponds to EDrivetrainType; 0 = FWD, 1 = RWD, 2 = AWD
s32 NumCylinders; //Number of cylinders in the engine

[Sept. 10, 2018 UPDATE= NEW DATA OUT STRUCTURE]

V1 is now called Sled
V2 is V1 then these added in this order at the bottom.
//Position (meters)
f32 PositionX;
f32 PositionY;
f32 PositionZ;

f32 Speed; // meters per second
f32 Power; // watts
f32 Torque; // newton meter

f32 TireTempFrontLeft;
f32 TireTempFrontRight;
f32 TireTempRearLeft;
f32 TireTempRearRight;

f32 Boost;
f32 Fuel;
f32 DistanceTraveled;
f32 BestLap;
f32 LastLap;
f32 CurrentLap;
f32 CurrentRaceTime;

u16 LapNumber;
u8 RacePosition;

u8 Accel;
u8 Brake;
u8 Clutch;
u8 HandBrake;
u8 Gear;
s8 Steer;

s8 NormalizedDrivingLine;
s8 NormalizedAIBrakeDifference;
*/
export enum FORZA_KEY_MAP {
  IsRaceOn = "int32le", // = 1 when race is on. = 0 when in menus/race stopped ‚Ä¶

  TimestampMS = "uint32le", // Can overflow to 0 eventually
  
  EngineMaxRpm = "floatle",
  EngineIdleRpm = "floatle",
  CurrentEngineRpm = "floatle",
  
  AccelerationX = "floatle", // In the car's local space = "", X = right, Y = up, Z = forward
  AccelerationY = "floatle",
  AccelerationZ = "floatle",
  
  VelocityX = "floatle", // In the car's local space = "", X = right, Y = up, Z = forward
  VelocityY = "floatle",
  VelocityZ = "floatle",
  
  AngularVelocityX = "floatle", // In the car's local space = "", X = pitch, Y = yaw, Z = roll
  AngularVelocityY = "floatle",
  AngularVelocityZ = "floatle",
  
  Yaw = "floatle",
  Pitch = "floatle",
  Roll = "floatle",
  
  NormalizedSuspensionTravelFrontLeft = "floatle", // Suspension travel normalized= 0.0f = max stretch = "", 1.0 = max compression
  NormalizedSuspensionTravelFrontRight = "floatle",
  NormalizedSuspensionTravelRearLeft = "floatle",
  NormalizedSuspensionTravelRearRight = "floatle",
  
  TireSlipRatioFrontLeft = "floatle", // Tire normalized slip ratio, = 0 means 100% grip and |ratio| > 1.0 means loss of grip.
  TireSlipRatioFrontRight = "floatle",
  TireSlipRatioRearLeft = "floatle",
  TireSlipRatioRearRight = "floatle",
  
  WheelRotationSpeedFrontLeft = "floatle", // Wheel rotation speed radians/sec.
  WheelRotationSpeedFrontRight = "floatle",
  WheelRotationSpeedRearLeft = "floatle",
  WheelRotationSpeedRearRight = "floatle",
  
  IheelOnRumbleStripFrontLeft = "int32le", // = 1 when wheel is on rumble strip, = 0 when off.
  IheelOnRumbleStripFrontRight = "int32le",
  IheelOnRumbleStripRearLeft = "int32le",
  IheelOnRumbleStripRearRight = "int32le",
  
  WheelInPuddleDepthFrontLeft = "floatle", // = from 0 to 1, where 1 is the deepest puddle
  WheelInPuddleDepthFrontRight = "floatle",
  WheelInPuddleDepthRearLeft = "floatle",
  WheelInPuddleDepthRearRight = "floatle",
  
  SurfaceRumbleFrontLeft = "floatle", // Non-dimensional surface rumble values passed to controller force feedback
  SurfaceRumbleFrontRight = "floatle",
  SurfaceRumbleRearLeft = "floatle",
  SurfaceRumbleRearRight = "floatle",
  
  TireSlipAngleFrontLeft = "floatle", // Tire normalized slip angle, = 0 means 100% grip and |angle| > 1.0 means loss of grip.
  TireSlipAngleFrontRight = "floatle",
  TireSlipAngleRearLeft = "floatle",
  TireSlipAngleRearRight = "floatle",
  
  TireCombinedSlipFrontLeft = "floatle", // Tire normalized combined slip, = 0 means 100% grip and |slip| > 1.0 means loss of grip.
  TireCombinedSlipFrontRight = "floatle",
  TireCombinedSlipRearLeft = "floatle",
  TireCombinedSlipRearRight = "floatle",
  
  SuspensionTravelMetersFrontLeft = "floatle", // Actual suspension travel in meters
  SuspensionTravelMetersFrontRight = "floatle",
  SuspensionTravelMetersRearLeft = "floatle",
  SuspensionTravelMetersRearRight = "floatle",
  
  CarOrdinal = "int32le", // Unique ID of the car make/model
  CarClass = "int32le", // Between 0 (D -- worst cars) and 7 (X class -- best cars) inclusive
  CarPerformanceIndex = "int32le", // Between 100 (slowest car) and 999 (fastest car) inclusive
  DrivetrainType = "int32le", // Corresponds to EDrivetrainType = "", 0 = FWD, 1 = RWD, 2 = AWD
  NumCylinders = "int32le", // Number of cylinders in the engine
  

  PositionX = "floatle",
  PositionY = "floatle",
  PositionZ = "floatle",
  
  Speed = "floatle", // meters per second
  Power = "floatle", // watts
  Torque = "floatle", // newton meter
  
  TireTempFrontLeft = "floatle",
  TireTempFrontRight = "floatle",
  TireTempRearLeft = "floatle",
  TireTempRearRight = "floatle",
  
  Boost = "floatle",
  Fuel = "floatle",
  DistanceTraveled = "floatle",
  BestLap = "floatle",
  LastLap = "floatle",
  CurrentLap = "floatle",
  CurrentRaceTime = "floatle",
  
  LapNumber = "uint16le",
  RacePosition = "uint8",
  
  Accel = "uint8",
  Brake = "uint8",
  Clutch = "uint8",
  HandBrake = "uint8",
  Gear = "uint8",
  Steer = "int8",
  
  NormalizedDrivingLine = "int8",
  NormalizedAIBrakeDifference = "int8",
}

export const ForzaKeyMapValues = Object.keys(FORZA_KEY_MAP);

export type ForzaMap = Record<keyof typeof FORZA_KEY_MAP, number | undefined>;

export enum PacketTopic {
  FH = "FH",
  F1_2020 = "F1_2020"
}

export type PacketParsed<T> = {
  key: string;
  topic: PacketTopic;
  message?: T;
};

export type ArrayPacketParsed = { 
  key: string;
  value: string;
}[];