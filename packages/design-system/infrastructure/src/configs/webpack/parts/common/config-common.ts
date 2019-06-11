import { Configuration } from 'webpack';

export function configCommon(): Configuration {
  return {
    bail: true,
    mode: 'none',
    performance: false,
    devtool: 'source-map',

    module: {
      rules: [],
      unknownContextCritical: false,
      exprContextCritical: false,
    },
    stats: {
      warningsFilter: /System.import/,
    },
  };
}
