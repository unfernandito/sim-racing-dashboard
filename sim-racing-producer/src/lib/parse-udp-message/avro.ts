import avro from "avsc";

export const FHMessageType = avro.Type.forSchema({
  name: "fh_telemetry_message",
  type: "record",
  fields: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "IsRaceOn",
      type: "int",
    },
    {
      name: "TimestampMS",
      type: "int",
    },
    {
      name: "EngineMaxRpm",
      type: "float",
    },
    {
      name: "EngineIdleRpm",
      type: "float",
    },
    {
      name: "CurrentEngineRpm",
      type: "float",
    },
    {
      name: "AccelerationX",
      type: "float",
    },
    {
      name: "AccelerationY",
      type: "float",
    },
    {
      name: "AccelerationZ",
      type: "float",
    },
    {
      name: "VelocityX",
      type: "float",
    },
    {
      name: "VelocityY",
      type: "float",
    },
    {
      name: "VelocityZ",
      type: "float",
    },
    {
      name: "AngularVelocityX",
      type: "float",
    },
    {
      name: "AngularVelocityY",
      type: "float",
    },
    {
      name: "AngularVelocityZ",
      type: "float",
    },
    {
      name: "Yaw",
      type: "float",
    },
    {
      name: "Pitch",
      type: "float",
    },
    {
      name: "Roll",
      type: "float",
    },
    {
      name: "NormalizedSuspensionTravelFrontLeft",
      type: "float",
    },
    {
      name: "NormalizedSuspensionTravelFrontRight",
      type: "float",
    },
    {
      name: "NormalizedSuspensionTravelRearLeft",
      type: "float",
    },
    {
      name: "NormalizedSuspensionTravelRearRight",
      type: "float",
    },
    {
      name: "TireSlipRatioFrontLeft",
      type: "float",
    },
    {
      name: "TireSlipRatioFrontRight",
      type: "float",
    },
    {
      name: "TireSlipRatioRearLeft",
      type: "float",
    },
    {
      name: "TireSlipRatioRearRight",
      type: "float",
    },
    {
      name: "WheelRotationSpeedFrontLeft",
      type: "float",
    },
    {
      name: "WheelRotationSpeedFrontRight",
      type: "float",
    },
    {
      name: "WheelRotationSpeedRearLeft",
      type: "float",
    },
    {
      name: "WheelRotationSpeedRearRight",
      type: "float",
    },
    {
      name: "WheelOnRumbleStripFrontLeft",
      type: "int",
    },
    {
      name: "WheelOnRumbleStripFrontRight",
      type: "int",
    },
    {
      name: "WheelOnRumbleStripRearLeft",
      type: "int",
    },
    {
      name: "WheelOnRumbleStripRearRight",
      type: "int",
    },
    {
      name: "WheelInPuddleDepthFrontLeft",
      type: "float",
    },
    {
      name: "WheelInPuddleDepthFrontRight",
      type: "float",
    },
    {
      name: "WheelInPuddleDepthRearLeft",
      type: "float",
    },
    {
      name: "WheelInPuddleDepthRearRight",
      type: "float",
    },
    {
      name: "SurfaceRumbleFrontLeft",
      type: "float",
    },
    {
      name: "SurfaceRumbleFrontRight",
      type: "float",
    },
    {
      name: "SurfaceRumbleRearLeft",
      type: "float",
    },
    {
      name: "SurfaceRumbleRearRight",
      type: "float",
    },
    {
      name: "TireSlipAngleFrontLeft",
      type: "float",
    },
    {
      name: "TireSlipAngleFrontRight",
      type: "float",
    },
    {
      name: "TireSlipAngleRearLeft",
      type: "float",
    },
    {
      name: "TireSlipAngleRearRight",
      type: "float",
    },
    {
      name: "TireCombinedSlipFrontLeft",
      type: "float",
    },
    {
      name: "TireCombinedSlipFrontRight",
      type: "float",
    },
    {
      name: "TireCombinedSlipRearLeft",
      type: "float",
    },
    {
      name: "TireCombinedSlipRearRight",
      type: "float",
    },
    {
      name: "SuspensionTravelMetersFrontLeft",
      type: "float",
    },
    {
      name: "SuspensionTravelMetersFrontRight",
      type: "float",
    },
    {
      name: "SuspensionTravelMetersRearLeft",
      type: "float",
    },
    {
      name: "SuspensionTravelMetersRearRight",
      type: "float",
    },
    {
      name: "CarOrdinal",
      type: "int",
    },
    {
      name: "CarClass",
      type: "int",
    },
    {
      name: "CarPerformanceIndex",
      type: "int",
    },
    {
      name: "DrivetrainType",
      type: "int",
    },
    {
      name: "NumCylinders",
      type: "int",
    },
    {
      name: "PositionX",
      type: "float",
    },
    {
      name: "PositionY",
      type: "float",
    },
    {
      name: "PositionZ",
      type: "float",
    },
    {
      name: "Speed",
      type: "float",
    },
    {
      name: "Power",
      type: "float",
    },
    {
      name: "Torque",
      type: "float",
    },
    {
      name: "TireTempFrontLeft",
      type: "float",
    },
    {
      name: "TireTempFrontRight",
      type: "float",
    },
    {
      name: "TireTempRearLeft",
      type: "float",
    },
    {
      name: "TireTempRearRight",
      type: "float",
    },
    {
      name: "Boost",
      type: "float",
    },
    {
      name: "Fuel",
      type: "float",
    },
    {
      name: "DistanceTraveled",
      type: "float",
    },
    {
      name: "BestLap",
      type: "float",
    },
    {
      name: "LastLap",
      type: "float",
    },
    {
      name: "CurrentLap",
      type: "float",
    },
    {
      name: "CurrentRaceTime",
      type: "float",
    },
    {
      name: "LapNumber",
      type: "int",
    },
    {
      name: "RacePosition",
      type: "int",
    },
    {
      name: "Accel",
      type: "int",
    },
    {
      name: "Brake",
      type: "int",
    },
    {
      name: "Clutch",
      type: "int",
    },
    {
      name: "HandBrake",
      type: "int",
    },
    {
      name: "Gear",
      type: "int",
    },
    {
      name: "Steer",
      type: "int",
    },
    {
      name: "NormalizedDrivingLine",
      type: "int",
    },
    {
      name: "NormalizedAIBrakeDifference",
      type: "int",
    },
    {
      name: "remote",
      type: {
        type: "record",
        name: "payload",
        fields: [
          {
            name: "address",
            type: "string",
          },
          {
            name: "family",
            type: "string",
          },
          {
            name: "port",
            type: "int",
          },
          {
            name: "size",
            type: "int",
          },
        ],
      },
    },
  ],
});
