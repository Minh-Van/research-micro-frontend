import { Configuration, RuleSetQuery } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigLoadHandlebarsParams {
  include?: string[];
  exclude?: string[];
}

export type ConfigLoadHandlebarsParamsType = () => {
  options?: RuleSetQuery;
  include?: string[];
  exclude?: string[];
};

export function configLoadHandlebars(
  params?: IConfigLoadHandlebarsParams | ConfigLoadHandlebarsParamsType
): Configuration {
  let include: Undefinable<string[]>;
  let exclude: Undefinable<string[]>;
  let options: Undefinable<RuleSetQuery>;

  if (isFunction(params)) {
    const _params = (params as ConfigLoadHandlebarsParamsType)();
    options = _params.options;
    include = _params.include;
    exclude = _params.exclude;
  } else {
    const _params = params as IConfigLoadHandlebarsParams;
    include = _params.include;
    exclude = _params.exclude;
  }

  const rules = [
    {
      test: /\.hbs$/,
      use: [
        {
          loader: 'handlebars-loader',
          options,
        },
      ],
      include,
      exclude,
    },
  ];

  return { module: { rules } };
}
