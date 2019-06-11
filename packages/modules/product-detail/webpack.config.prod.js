/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.config.base');

module.exports = merge(common, {
  mode: 'production',
  entry: [path.resolve(__dirname, './src/views/ProductDetail/module.ts')],
  output: {
    library: 'ProductDetailModule',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 6,
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
