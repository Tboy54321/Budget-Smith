module.exports = {
    // ... other configurations ...
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
  };