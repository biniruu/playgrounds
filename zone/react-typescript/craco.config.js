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
          _: path.resolve(__dirname, 'src/'),
          _components: path.resolve(__dirname, 'src/components'),
          _temp: path.resolve(__dirname, 'src/components/temp'),
          _css: path.resolve(__dirname, 'src/assets/css'),
          _utils: path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
