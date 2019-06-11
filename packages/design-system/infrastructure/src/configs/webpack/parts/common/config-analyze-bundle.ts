import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function configAnalyzeBundle(): Configuration {
  const plugins = [new BundleAnalyzerPlugin({ analyzerMode: 'static' })];

  return { plugins };
}
