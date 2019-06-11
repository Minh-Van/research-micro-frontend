/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const commonRules = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    include: [
      path.resolve(__dirname, '../../design-system/infrastructure/src'),
      path.resolve(__dirname, '../../design-system/core/src'),
      path.resolve(__dirname, '../../design-system/themes/src'),
      path.resolve(__dirname, './src'),
    ],
    use: [
      'cache-loader',
      'thread-loader',
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '59',
                },
                modules: false,
              },
            ],
          ],
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
              },
            ],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
          ],
          env: {
            production: {
              plugins: [
                '@babel/plugin-transform-react-constant-elements',
                '@babel/plugin-transform-react-inline-elements',
              ],
            },
          },
        },
      },
    ],
  },
  {
    test: /\.(png|jpg|woff|woff2|ttf|ico|eot)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
];

const commonResolve = {
  modules: [
    path.resolve(__dirname, './src'),
    path.resolve(__dirname, '../../design-system/infrastructure/src'),
    path.resolve(__dirname, '../../design-system/core/src'),
    path.resolve(__dirname, '../../design-system/themes/src'),
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, '../../design-system/infrastructure/node_modules'),
    path.resolve(__dirname, '../../design-system/core/node_modules'),
    path.resolve(__dirname, '../../design-system/themes/node_modules'),
  ],
  extensions: ['.js', '.jsx', '.tsx', '.ts'],
  alias: {
    'styled-components': path.resolve(
      __dirname,
      './node_modules/styled-components'
    ),
    '@design-system/infrastructure': path.resolve(
      __dirname,
      '../../design-system/infrastructure/src'
    ),
    '@design-system/core': path.resolve(
      __dirname,
      '../../design-system/core/src'
    ),
    '@design-system/themes': path.resolve(
      __dirname,
      '../../design-system/themes/src'
    ),
  },
};

const commonPlugins = [
  new ForkTsCheckerWebpackPlugin({
    checkSyntacticErrors: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  }),
];

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.tsx'),
  },
  output: {
    publicPath: '/',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  module: {
    rules: commonRules,
  },
  resolve: commonResolve,
  plugins: commonPlugins,
  devServer: {
    historyApiFallback: true,
    port: 12000,
  },
};
