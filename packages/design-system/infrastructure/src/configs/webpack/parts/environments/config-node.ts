import { Configuration, Node } from 'webpack';

export function configNode(params?: Node): Configuration {
  const node = params || {
    global: true,
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  };

  return { node };
}
