import { Configuration, Plugin } from 'webpack';
import WebpackShellPlugin from 'webpack-shell-plugin';

export function configClean(params: {
  onBuildStart?: string[];
  onBuildExit?: string[];
}): Configuration {
  const { onBuildStart, onBuildExit } = params;

  const plugins = [
    (new WebpackShellPlugin({
      onBuildStart: !onBuildStart
        ? []
        : onBuildStart.map(item => `rimraf ${item}`),
      onBuildExit: !onBuildExit
        ? []
        : onBuildExit.map(item => `rimraf ${item}`),
    }) as unknown) as Plugin,
  ];

  return { plugins };
}
