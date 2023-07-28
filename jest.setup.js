const { localStorageMock } = require('./src/modules/localStorageMock.js');

// Mock localStorage globally for all test files
global.localStorage = localStorageMock;
