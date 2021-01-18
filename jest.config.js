export default {
  verbose: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'API/(.*)': '<rootDir>/src/API/$1',
    'config/(.*)': '<rootDir>/src/config/$1',
  },
};
