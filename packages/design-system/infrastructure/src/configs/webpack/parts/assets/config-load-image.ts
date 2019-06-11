import { Configuration, RuleSetQuery } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigLoadImageParams {
  outputPath?: string;
  publicPath?: string;
  include?: string[];
  exclude?: string[];
}

export type ConfigLoadImageParamsType = () => {
  options?: RuleSetQuery;
  include?: string[];
  exclude?: string[];
};

export function configLoadImage(
  params?: IConfigLoadImageParams | ConfigLoadImageParamsType
): Configuration {
  let outputPath: Undefinable<string>;
  let publicPath: Undefinable<string>;
  let include: Undefinable<string[]>;
  let exclude: Undefinable<string[]>;
  let options: Undefinable<RuleSetQuery>;

  if (isFunction(params)) {
    const _params = (params as ConfigLoadImageParamsType)();
    options = _params.options;
    include = _params.include;
    exclude = _params.exclude;
  } else {
    const _params = params as IConfigLoadImageParams;
    outputPath = _params.outputPath;
    publicPath = _params.publicPath;
    include = _params.include;
    exclude = _params.exclude;
  }

  const rules = [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: options || {
            name: '[name].[hash:20].[ext]',
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
