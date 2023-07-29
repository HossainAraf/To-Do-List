module.exports = {
  testEnvironment: 'jsdom', // Use jsdom as the test environment for testing browser-related code
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$', // Specify the regex pattern to find test files
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Define the file extensions to consider as modules
  collectCoverage: true, // Enable code coverage
  collectCoverageFrom: ['src/**/*.js'], // Specify the files to include for code coverage
  coverageReporters: ['lcov', 'text'], // Specify the code coverage report format
};
