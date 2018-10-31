// https://jestjs.io/docs/en/configuration
module.exports = {
  'transform': {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
  'testMatch': [
    "<rootDir>/src/**/?(*.)test.js",
    "<rootDir>/src/**/?(*.)test.ts",
  ],
}
