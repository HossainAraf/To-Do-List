module.exports = {
  // Indicates that Jest should collect coverage information
  collectCoverage: true,

  // Specify the test environment
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  // Mocking localStorage
  setupFiles: ['<rootDir>/src/modules/localStorageMock.js'],

  // Any other Jest configuration options you may have

  // Add this section to transform the code using Babel
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
