import { Configuration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export function configCopy(params: CopyWebpackPlugin[]): Configuration {
  return { plugins: params };
}
