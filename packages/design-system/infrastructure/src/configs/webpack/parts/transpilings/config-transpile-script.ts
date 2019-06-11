import { Configuration, Plugin, RuleSetRule } from 'webpack';
import HappyPack from 'happypack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigTranspileScriptParams {
  happyPackId: string;
  threadPool: object;
  threads: number;
  tsConfigPath: string;
  enableOptimize?: boolean;
  babelPlugins?: string | any[];
  include?: string[];
  exclude?: string[];
}

export type ConfigTranspileScriptParamsType = () => {
  plugins?: Plugin[];
  loaders?: RuleSetRule[];
};

export function configTranspileScript(
  params: IConfigTranspileScriptParams | ConfigTranspileScriptParamsType
): Configuration {
  let _plugins: Undefinable<Plugin[]>;
  let _loaders: Undefinable<RuleSetRule[]>;

  if (isFunction(params)) {
    const { plugins, loaders } = (params as ConfigTranspileScriptParamsType)();
    _plugins = plugins;
    _loaders = loaders;
  } else {
    const {
      happyPackId,
      threadPool,
      threads,
      tsConfigPath,
      enableOptimize,
      babelPlugins,
      include,
      exclude,
    } = params as IConfigTranspileScriptParams;

    _loaders = [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: [`happypack/loader?id=${happyPackId}`],
        include,
        exclude,
      },
    ];

    _plugins = [
      new ForkTsCheckerWebpackPlugin({
        workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
        useTypescriptIncrementalApi: true,
        async: false,
        silent: true,
        checkSyntacticErrors: true,
        tsconfig: tsConfigPath,
        compilerOptions: {
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: 'preserve',
        },
      }),
      new HappyPack({
        id: happyPackId,
        threadPool,
        threads,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: enableOptimize,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: false,
                    targets: '> 0.25%, not dead',
                  },
                ],
                ['@babel/preset-react', { development: !enableOptimize }],
                '@babel/preset-typescript',
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    corejs: 2,
                    helpers: true,
                    regenerator: true,
                    useESModules: false,
                  },
                ],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                [
                  'babel-plugin-styled-components',
                  {
                    ssr: false,
                    displayName: true,
                    fileName: false,
                    transpileTemplateLiterals: true,
                    pure: true,
                    minify: true,
                  },
                ],
                ...(enableOptimize
                  ? ['@babel/plugin-transform-react-inline-elements']
                  : []),
                ...(babelPlugins || []),
              ],
            },
          },
        ],
      }),
    ];
  }

  return {
    ...(_loaders ? { module: { rules: _loaders } } : undefined),
    plugins: _plugins,
  };
}
