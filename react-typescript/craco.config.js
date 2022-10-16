const path = require('path')

module.exports = {
  webpack: {
    configure: {
      experiments: {
        // futureDefaults: true,
        topLevelAwait: true,
      },
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@css': path.resolve(__dirname, 'src/assets/css'),
        },
      },
    },
  },
}
