import { Configuration, Plugin } from 'webpack';
import HtmlWebpackPlugin, { Options } from 'html-webpack-plugin';
import { isFunction } from '../../../../utils';

export interface IConfigHtmlTemplateParams {
  title: string;
  templatePath: string;
  entryPoints?: string[];
  minify?: boolean;
  data?: any;
}

export type ConfigHtmlTemplateParamsType = () => Options[];

export function configHtmlTemplate(
  params: IConfigHtmlTemplateParams | ConfigHtmlTemplateParamsType
): Configuration {
  let plugins: Plugin[];

  if (isFunction(params)) {
    plugins = [
      new HtmlWebpackPlugin((params as ConfigHtmlTemplateParamsType)()),
    ];
  } else {
    const {
      title,
      templatePath,
      entryPoints,
      minify,
      data,
    } = params as IConfigHtmlTemplateParams;
    const _minifyConfig = !minify
      ? {}
      : {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyURLs: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
        };

    plugins = [
      new HtmlWebpackPlugin({
        title,
        filename: 'index.html',
        template: templatePath,
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        cache: true,
        showErrors: true,
        xhtml: true,
        chunks: 'all',
        excludeChunks: [],
        minify: { ..._minifyConfig },
        ...data,
        // Temporarily handle chunksSortMode like this because of sorting issue in HtmlWebpackPlugin
        ...(entryPoints && entryPoints.length > 1
          ? {
              chunksSortMode: (a, b) => {
                return (
                  entryPoints.indexOf(a['names'][0]) -
                  entryPoints.indexOf(b['names'][0])
                );
              },
            }
          : {}),
      }),
    ];
  }

  return { plugins };
}
