module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/styleMock.js'
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  coveragePathIgnorePatterns: ['node_modules'],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true
}
