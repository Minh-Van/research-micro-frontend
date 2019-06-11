/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

const common = require('./webpack.config.base');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body',
    }),
    new ConcatPlugin({
      name: 'vendors',
      fileName: '[name].js',
      filesToConcat: [
        path.resolve(
          __dirname,
          '../../design-system/infrastructure/src/3rd-parties/react.js'
        ),
        path.resolve(
          __dirname,
          '../../design-system/infrastructure/src/3rd-parties/react-dom.js'
        ),
        path.resolve(
          __dirname,
          '../../design-system/infrastructure/src/3rd-parties/styled-components.js'
        ),
      ],
    }),
  ],
  devServer: {
    hot: true,
    stats: {
      all: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      colors: true,
      timings: true,
    },
  },
});
