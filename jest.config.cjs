module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json"],
  // testEnvironment: "node",
};
