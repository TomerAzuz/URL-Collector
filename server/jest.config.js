export default {
  displayName: 'server',
  testEnvironment: 'node',
  rootDir: './',
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: '../babel.config.cjs' }],
  },

  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/server/'],
};
