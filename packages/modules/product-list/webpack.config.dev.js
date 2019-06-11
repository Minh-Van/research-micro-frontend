/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.config.base');

module.exports = merge(common, {
  mode: 'development',
  entry: [path.resolve(__dirname, './src/main.tsx')],
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body',
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
