import { Configuration } from 'webpack';

export function configCommonOptimization(): Configuration {
  return {
    optimization: {
      namedModules: true,
      noEmitOnErrors: true,
      concatenateModules: true,
      sideEffects: true,
      occurrenceOrder: true,
      providedExports: true,
      usedExports: true,
    },
  };
}
