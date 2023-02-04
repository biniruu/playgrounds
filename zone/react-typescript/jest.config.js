/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    '^\\$components/(.*)$': '<rootDir>/src/components/$1',
    '^\\$css/(.*)$': '<rootDir>/src/assets/css/$1',
  },
}
