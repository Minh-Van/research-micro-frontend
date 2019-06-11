import { Configuration, RuleSetQuery } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigLoadFontParams {
  outputPath?: string;
  publicPath?: string;
  include?: string[];
  exclude?: string[];
}

export type ConfigLoadFontParamsType = () => {
  options?: RuleSetQuery;
  include?: string[];
  exclude?: string[];
};

export function configLoadFont(
  params?: IConfigLoadFontParams | ConfigLoadFontParamsType
): Configuration {
  let outputPath: Undefinable<string>;
  let publicPath: Undefinable<string>;
  let include: Undefinable<string[]>;
  let exclude: Undefinable<string[]>;
  let options: Undefinable<RuleSetQuery>;

  if (isFunction(params)) {
    const _params = (params as ConfigLoadFontParamsType)();
    options = _params.options;
    include = _params.include;
    exclude = _params.exclude;
  } else {
    const _params = params as IConfigLoadFontParams;
    outputPath = _params.outputPath;
    publicPath = _params.publicPath;
    include = _params.include;
    exclude = _params.exclude;
  }

  const rules = [
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: options || {
            name: '[name].[ext]',
            limit: 10000,
            outputPath,
            publicPath,
          },
        },
      ],
      include,
      exclude,
    },
  ];

  return { module: { rules } };
}
