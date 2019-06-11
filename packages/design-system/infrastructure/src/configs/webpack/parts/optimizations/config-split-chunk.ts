import { Configuration, Options } from 'webpack';

export function configSplitChunk(params: {
  cacheGroups:
    | string
    | false
    | RegExp
    | ((...args: any[]) => any)
    | { [key: string]: false | Options.CacheGroupsOptions };
  include?: string[];
  exclude?: string[];
}): Configuration {
  const { cacheGroups } = params;

  return {
    optimization: {
      splitChunks: { cacheGroups },
      namedChunks: true,
      flagIncludedChunks: true,
    },
  };
}
