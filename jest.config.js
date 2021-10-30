module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js'
  },
  // User jsdom for testing DOM manipulation
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  // add text-summary for shorter jest output
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  coveragePathIgnorePatterns: ['node_modules'],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true
}
