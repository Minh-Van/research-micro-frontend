/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.config.base');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 6,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
    }),
    new ConcatPlugin({
      name: 'vendors',
      fileName: '[name].[hash:20].js',
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
    ...(process.env.PROFILING
      ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          generateStatsFile: true,
        }),
      ]
      : []),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
});
