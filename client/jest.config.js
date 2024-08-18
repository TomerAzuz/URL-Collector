export default {
  displayName: 'client',
  testEnvironment: 'jsdom',
  rootDir: './',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: '../babel.config.cjs' }],
  },
  moduleDirectories: ['node_modules', 'src'],

  testPathIgnorePatterns: ['<rootDir>/client/'],
};
