import { Configuration, Plugin } from 'webpack';
import ConcatPlugin from 'webpack-concat-plugin';
import { isFunction } from '../../../../utils';

export interface IConfigContactLibsParams {
  name: string;
  fileName: string;
  filesToConcat: any[];
}

export type ConfigContactLibsParamsType = () => ConcatPlugin[];

export function configConcatLibs(
  params: IConfigContactLibsParams | ConfigContactLibsParamsType
): Configuration {
  let plugins: Plugin[];

  if (isFunction(params)) {
    plugins = (params as ConfigContactLibsParamsType)();
  } else {
    const {
      name,
      fileName,
      filesToConcat,
    } = params as IConfigContactLibsParams;
    plugins = [
      new ConcatPlugin({
        name,
        fileName,
        filesToConcat,
      }),
    ];
  }

  return { plugins };
}
