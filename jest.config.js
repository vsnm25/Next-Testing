/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
  },
};
