import { Configuration, DefinePlugin } from 'webpack';
import { isFunction } from '../../../../utils';

export interface IConfigDefineParams {
  isProductionBuild?: boolean;
  extras?: { [key: string]: any };
}

export type ConfigDefineParamsType = () => DefinePlugin[];

export function configDefine(
  params?: IConfigDefineParams | ConfigDefineParamsType
): Configuration {
  let plugins: DefinePlugin[];

  if (isFunction(params)) {
    plugins = (params as ConfigDefineParamsType)();
  } else {
    const options = {
      isProductionBuild: false,
      extras: {},
      ...(params as IConfigDefineParams),
    };
    plugins = [
      new DefinePlugin(
        Object.keys(options).reduce((result, prop) => {
          switch (prop) {
            case 'isProductionBuild':
              result['process.env.NODE_ENV'] = JSON.stringify(
                options[prop] ? 'production' : 'develop'
              );
              break;
            case 'extras':
              Object.keys(options[prop]).forEach(extraProp => {
                result[extraProp] = JSON.stringify(options[prop][extraProp]);
              });
              break;
          }

          return result;
        }, {})
      ),
    ];
  }

  return { plugins };
}
