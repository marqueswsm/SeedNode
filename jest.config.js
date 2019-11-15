/* eslint max-len: ["error", { "code": 150 }] */

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/*',
  ],

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'ts',
    'd.ts',
  ],

  setupFilesAfterEnv: ['./src/helpers/Jest.js'],
  testEnvironment: 'node',

  testPathIgnorePatterns: [
    '/node_modules/*',
  ],

  transformIgnorePatterns: [
    '/node_modules/*',
  ],
};
