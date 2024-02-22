const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/client/client.ts'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
