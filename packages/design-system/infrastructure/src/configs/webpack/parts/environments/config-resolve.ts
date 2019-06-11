import { Configuration, Resolve } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';

export interface IConfigResolveParams {
  extensions?: string[];
  modules?: string[];
  alias?: any;
}

export type ConfigResolveParamsType = () => Resolve;

export function configResolve(
  params?: IConfigResolveParams | ConfigResolveParamsType
): Configuration {
  let extensions: Undefinable<string[]>;
  let modules: Undefinable<string[]>;
  let alias: Undefinable<any>;
  let _resolve: Undefinable<Resolve>;

  if (isFunction(params)) {
    _resolve = (params as ConfigResolveParamsType)();
  } else {
    const _params = params as IConfigResolveParams;
    extensions = _params.extensions;
    modules = _params.modules;
    alias = _params.alias;
  }

  const resolve = _resolve || {
    extensions,
    alias,
    symlinks: true,
    modules,
    mainFields: ['browser', 'module', 'main'],
  };

  return { resolve };
}
