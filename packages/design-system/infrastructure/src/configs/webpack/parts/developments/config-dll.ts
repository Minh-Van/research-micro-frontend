import path from 'path';
import { Configuration, DllPlugin } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigDllParams {
  distPath: string;
  context?: string;
}

export type ConfigDllParamsType = () => {
  options: DllPlugin.Options;
};

export function configDll(
  params: IConfigDllParams | ConfigDllParamsType
): Configuration {
  let _path: Undefinable<string>;
  let context: Undefinable<string>;
  let options: Undefinable<DllPlugin.Options>;

  if (isFunction(params)) {
    const _params = (params as ConfigDllParamsType)();
    options = _params.options;
  } else {
    const _params = params as IConfigDllParams;
    _path = path.join(_params.distPath, '[name]/manifest.json');
    context = _params.context;
  }

  const plugins = [
    new DllPlugin(
      options || {
        context,
        path: _path as string,
        name: '[name]',
      }
    ),
  ];

  return { plugins };
}
