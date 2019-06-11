import { Configuration, Plugin } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigMinimizeScriptParams {
  include?: string[];
  exclude?: string[];
}

export type ConfigMinimizeScriptParamsType = () => {
  plugins: Plugin[];
  include?: string[];
  exclude?: string[];
};

export function configtMinimizeScript(
  params?: IConfigMinimizeScriptParams | ConfigMinimizeScriptParamsType
): Configuration {
  let include: Undefinable<string[]>;
  let exclude: Undefinable<string[]>;
  let plugins: Undefinable<Plugin[]>;

  if (isFunction(params)) {
    const _params = (params as ConfigMinimizeScriptParamsType)();
    plugins = _params.plugins;
    include = _params.include;
    exclude = _params.exclude;
  } else {
    const _params = params as IConfigMinimizeScriptParams;
    include = _params.include;
    exclude = _params.exclude;
  }

  const minimizer = plugins || [
    new TerserPlugin({
      terserOptions: {
        parse: {
          // we want terser to parse ecma 8 code. However, we don't want it
          // to apply any minfication steps that turns valid ecma 5 code
          // into invalid ecma 5 code. This is why the 'compress' and 'output'
          // sections only apply transformations that are ecma 5 safe
          // https://github.com/facebook/create-react-app/pull/4234
          ecma: 8,
        },
        compress: {
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebook/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false,
          // Disabled because of an issue with Terser breaking valid code:
          // https://github.com/facebook/create-react-app/issues/5250
          // Pending futher investigation:
          // https://github.com/terser-js/terser/issues/120
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          // eslint-disable-next-line @typescript-eslint/camelcase
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: true,
      include,
      exclude,
    }),
  ];

  return {
    optimization: {
      minimize: true,
      minimizer,
    },
  };
}
