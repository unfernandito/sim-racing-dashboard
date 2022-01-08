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
      type: "int",
    },
    {
      name: "EngineIdleRpm",
      type: "int",
    },
    {
      name: "CurrentEngineRpm",
      type: "int",
    },
    {
      name: "AccelerationX",
      type: "int",
    },
    {
      name: "AccelerationY",
      type: "int",
    },
    {
      name: "AccelerationZ",
      type: "int",
    },
    {
      name: "VelocityX",
      type: "int",
    },
    {
      name: "VelocityY",
      type: "int",
    },
    {
      name: "VelocityZ",
      type: "int",
    },
    {
      name: "AngularVelocityX",
      type: "int",
    },
    {
      name: "AngularVelocityY",
      type: "int",
    },
    {
      name: "AngularVelocityZ",
      type: "int",
    },
    {
      name: "Yaw",
      type: "int",
    },
    {
      name: "Pitch",
      type: "int",
    },
    {
      name: "Roll",
      type: "int",
    },
    {
      name: "NormalizedSuspensionTravelFrontLeft",
      type: "int",
    },
    {
      name: "NormalizedSuspensionTravelFrontRight",
      type: "int",
    },
    {
      name: "NormalizedSuspensionTravelRearLeft",
      type: "int",
    },
    {
      name: "NormalizedSuspensionTravelRearRight",
      type: "int",
    },
    {
      name: "TireSlipRatioFrontLeft",
      type: "int",
    },
    {
      name: "TireSlipRatioFrontRight",
      type: "int",
    },
    {
      name: "TireSlipRatioRearLeft",
      type: "int",
    },
    {
      name: "TireSlipRatioRearRight",
      type: "int",
    },
    {
      name: "WheelRotationSpeedFrontLeft",
      type: "int",
    },
    {
      name: "WheelRotationSpeedFrontRight",
      type: "int",
    },
    {
      name: "WheelRotationSpeedRearLeft",
      type: "int",
    },
    {
      name: "WheelRotationSpeedRearRight",
      type: "int",
    },
    {
      name: "IheelOnRumbleStripFrontLeft",
      type: "int",
    },
    {
      name: "IheelOnRumbleStripFrontRight",
      type: "int",
    },
    {
      name: "IheelOnRumbleStripRearLeft",
      type: "int",
    },
    {
      name: "IheelOnRumbleStripRearRight",
      type: "int",
    },
    {
      name: "WheelInPuddleDepthFrontLeft",
      type: "int",
    },
    {
      name: "WheelInPuddleDepthFrontRight",
      type: "int",
    },
    {
      name: "WheelInPuddleDepthRearLeft",
      type: "int",
    },
    {
      name: "WheelInPuddleDepthRearRight",
      type: "int",
    },
    {
      name: "SurfaceRumbleFrontLeft",
      type: "int",
    },
    {
      name: "SurfaceRumbleFrontRight",
      type: "int",
    },
    {
      name: "SurfaceRumbleRearLeft",
      type: "int",
    },
    {
      name: "SurfaceRumbleRearRight",
      type: "int",
    },
    {
      name: "TireSlipAngleFrontLeft",
      type: "int",
    },
    {
      name: "TireSlipAngleFrontRight",
      type: "int",
    },
    {
      name: "TireSlipAngleRearLeft",
      type: "int",
    },
    {
      name: "TireSlipAngleRearRight",
      type: "int",
    },
    {
      name: "TireCombinedSlipFrontLeft",
      type: "int",
    },
    {
      name: "TireCombinedSlipFrontRight",
      type: "int",
    },
    {
      name: "TireCombinedSlipRearLeft",
      type: "int",
    },
    {
      name: "TireCombinedSlipRearRight",
      type: "int",
    },
    {
      name: "SuspensionTravelMetersFrontLeft",
      type: "int",
    },
    {
      name: "SuspensionTravelMetersFrontRight",
      type: "int",
    },
    {
      name: "SuspensionTravelMetersRearLeft",
      type: "int",
    },
    {
      name: "SuspensionTravelMetersRearRight",
      type: "int",
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
      type: "int",
    },
    {
      name: "PositionY",
      type: "int",
    },
    {
      name: "PositionZ",
      type: "int",
    },
    {
      name: "Speed",
      type: "int",
    },
    {
      name: "Power",
      type: "int",
    },
    {
      name: "Torque",
      type: "int",
    },
    {
      name: "TireTempFrontLeft",
      type: "int",
    },
    {
      name: "TireTempFrontRight",
      type: "int",
    },
    {
      name: "TireTempRearLeft",
      type: "int",
    },
    {
      name: "TireTempRearRight",
      type: "int",
    },
    {
      name: "Boost",
      type: "int",
    },
    {
      name: "Fuel",
      type: "int",
    },
    {
      name: "DistanceTraveled",
      type: "int",
    },
    {
      name: "BestLap",
      type: "int",
    },
    {
      name: "LastLap",
      type: "int",
    },
    {
      name: "CurrentLap",
      type: "int",
    },
    {
      name: "CurrentRaceTime",
      type: "int",
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
