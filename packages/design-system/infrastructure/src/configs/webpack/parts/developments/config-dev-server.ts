import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';

export function configDevServer(options: {
  contentBase: string;
  host: string;
  port: number;
  hot?: boolean;
  compress?: boolean;
}): Configuration {
  const { contentBase, host, port, hot, compress } = options;

  const entry = [
    // We include the app code last so that if there is a runtime error during
    // initialization, it doesn't blow up the WebpackDevServer client, and
    // changing JS code would still trigger a refresh.
    ...(hot ? [require.resolve('react-dev-utils/webpackHotDevClient')] : []),
  ];

  const plugins = [
    new HardSourceWebpackPlugin(),
    ...(hot ? [new HotModuleReplacementPlugin()] : []),
  ];

  return {
    entry,
    plugins,
    // The setup may be problematic on certain versions of Windows, Ubuntu, and Vagrant.
    // We can solve this through polling
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1 * 1000,
    },
    devServer: {
      hot,
      compress,
      disableHostCheck: true,
      historyApiFallback: {
        // Paths with dots should still use the history fallback.
        // See https://github.com/facebook/create-react-app/issues/387.
        disableDotRule: true,
      },
      quiet: false,
      noInfo: false,
      clientLogLevel: 'error',
      overlay: false,
      host,
      port,
      contentBase,
      watchContentBase: !!hot,
      publicPath: `http://${host}:${port}/`,
      stats: {
        colors: true,
        errors: true,
        errorDetails: true,
        warningsFilter: /System.import/,
      },
      before: (app, server) => {
        // This lets us fetch source contents from webpack for the error overlay
        app.use(evalSourceMapMiddleware(server));
        // This lets us open files from the runtime error overlay.
        app.use(errorOverlayMiddleware());
        // This service worker file is effectively a 'no-op' that will reset any
        // previous service worker registered for the same host:port combination.
        // We do this in development to avoid hitting the production cache if
        // it used the same host and port.
        // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
        app.use(noopServiceWorkerMiddleware());
      },
    },
  } as any;
}
