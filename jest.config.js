/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  coverageDirectory: '<rootDir>/coverage',
  // collectCoverageFrom: [
  //   '<rootDir>/src/**/*.ts',
  //   '<rootDir>/src/**/constants.ts',
  // ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
  coverageReporters: ["json", "html"],
  testMatch: ["<rootDir>/tests/*.spec.ts"]
};