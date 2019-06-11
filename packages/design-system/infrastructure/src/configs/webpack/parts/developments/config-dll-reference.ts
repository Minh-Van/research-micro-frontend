import path from 'path';
import { Configuration, DllReferencePlugin } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigDllReferenceParams {
  distPath: string;
  context: string;
}

export type ConfigDllReferenceParamsType = () => {
  options: DllReferencePlugin.Options;
};

export function configDllReference(
  params: IConfigDllReferenceParams | ConfigDllReferenceParamsType
): Configuration {
  let manifest: Undefinable<string>;
  let context: Undefinable<string>;
  let options: Undefinable<DllReferencePlugin.Options>;

  if (isFunction(params)) {
    const _params = (params as ConfigDllReferenceParamsType)();
    options = _params.options;
  } else {
    const _params = params as IConfigDllReferenceParams;
    manifest = path.join(_params.distPath, 'manifest.json');
    context = _params.context;
  }

  const plugins = [
    new DllReferencePlugin(
      options || {
        context: context as string,
        manifest: manifest as string,
      }
    ),
  ];

  return { plugins };
}
