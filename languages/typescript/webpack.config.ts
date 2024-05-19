/**
 * Generated using webpack-cli
 * {@link https://github.com/webpack/webpack-cli}
 */

import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as WebpackConfiguration } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const isProduction = process.env.NODE_ENV === 'production'

const config: Configuration = {
  devServer: {
    open: true,
    host: 'localhost',
  },
  entry: './src/index.ts',
  mode: isProduction ? 'production' : 'development',
  /**
   * [rules] {@link https://webpack.js.org/loaders}
   */
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  /**
   * [plugins] {@link https://webpack.js.org/configuration/plugins}
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}

const result = () => {
  if (isProduction) {
    config.plugins?.push(new WorkboxWebpackPlugin.GenerateSW())
  }

  return config
}

export default result
