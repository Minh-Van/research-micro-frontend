import { Configuration } from 'webpack';
import { Undefinable } from '../../../../models';
import { isFunction } from '../../../../utils';
import AddAssetHtmlPlugin, { Options } from 'add-asset-html-webpack-plugin';

export interface IConfigAddAssetHtmlParams {
  filePath: string;
  publicPath?: string;
}

export type ConfigAddAssetHtmlParamsType = () => {
  options: Options;
};

export function configAddAssetHtml(
  params: IConfigAddAssetHtmlParams | ConfigAddAssetHtmlParamsType
): Configuration {
  let filePath: Undefinable<string>;
  let publicPath: Undefinable<string>;
  let options: Undefinable<Options>;

  if (isFunction(params)) {
    const _params = (params as ConfigAddAssetHtmlParamsType)();
    options = _params.options;
  } else {
    const _params = params as IConfigAddAssetHtmlParams;
    filePath = _params.filePath;
    publicPath = _params.publicPath;
  }

  const plugins = [
    new AddAssetHtmlPlugin(
      options || {
        publicPath,
        filepath: filePath as string,
      }
    ),
  ];

  return { plugins };
}
