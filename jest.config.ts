import { pathsToModuleNameMapper } from "ts-jest/utils";
const { compilerOptions } = require("./tsconfig");

export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: true,
    },
    NODE_ENV: "test",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  collectCoverageFrom: [
    "src/*.ts",
    "src/**/*.{js,ts}",
    "!<rootDir>/node_modules/",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  verbose: true,
  coveragePathIgnorePatterns: ["node_modules", "<rootDir>/dist"],
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "**/**/?(*.)+(spec|test).[jt]s?(x)",
    "**/**/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  modulePathIgnorePatterns: [".git", "<rootDir>/dist"],
  reporters: ["default"],
  coverageReporters: ["text-summary", "lcov", "text"],
  testEnvironment: "node",
};
