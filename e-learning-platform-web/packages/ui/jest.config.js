module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx|js)"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      useBabelrc: true,
      // tsConfigFile: "jest.tsconfig.json",
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
