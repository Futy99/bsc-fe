module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text', 'cobertura'],
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  collectCoverageFrom: ['src/{components,screens,utils}/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['spec', 'testing'],
  moduleNameMapper: {
    '^constants/(.*)$': '/src/constants/$1',
    '^utils/(.*)$': '/src/utils/$1',
    '^components/(.*)$': '/src/components/$1',
    '^locale/(.*)$': '/src/locale/$1',
    '^screens/(.*)$': '/src/screens/$1',
    '^store/(.*)$': '/src/store/$1',
  },
  transformIgnorePatterns: [`/node_modules/`],
}
