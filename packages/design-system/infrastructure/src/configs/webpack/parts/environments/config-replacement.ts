import { Configuration, NormalModuleReplacementPlugin } from 'webpack';

export function configReplacement(
  params?: NormalModuleReplacementPlugin[]
): Configuration {
  const plugins = params || [
    new NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
  ];

  return { plugins };
}
