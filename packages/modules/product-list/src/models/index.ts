import originStyled, {
  css as originCss,
  createGlobalStyle as originCreateGlobalStyle,
  withTheme as originWithTheme,
  ThemeProvider as OriginThemeProvider,
  ThemeConsumer as OriginThemeConsumer,
  keyframes,
  ThemedBaseStyledInterface,
  BaseThemedCssFunction,
  BaseWithThemeFnInterface,
  ThemeProviderProps,
  ThemedStyledProps,
  Interpolation,
  CSSObject,
  InterpolationFunction,
  GlobalStyleComponent,
} from 'styled-components';
import {
  IDefaultTheme,
  DefaultTheme,
} from '@design-system/themes/built-in/default';

import { IProductListViewTheme } from '../views/ProductList';

export interface IProductListModuleTheme extends IDefaultTheme {
  views: IProductListViewsTheme;
  setViewTheme(
    ...funcs: Array<(theme: IProductListModuleTheme) => IProductListViewsTheme>
  ): void;
}

export interface IProductListViewsTheme {
  productList?: IProductListViewTheme;
}

export class ProductListModuleTheme extends DefaultTheme
  implements IProductListModuleTheme {
  id = 'ProductListModuleTheme';
  isLightTheme = true;
  isDarkTheme = false;
  views: IProductListViewsTheme = {};

  setViewTheme(
    ...funcs: Array<(theme: IProductListModuleTheme) => IProductListViewsTheme>
  ): void {
    this.views = {
      ...this.views,
      ...funcs.reduce(
        (result, func) => ({
          ...result,
          ...func(this),
        }),
        {} as IProductListViewsTheme
      ),
    };
  }
}

export function getAllViewTheme(
  theme: IProductListModuleTheme
): IProductListViewsTheme {
  return {
    ...getProductListViewTheme(theme),
  };
}

export function getProductListViewTheme(
  theme: IProductListModuleTheme
): IProductListViewsTheme {
  const { background } = theme;

  return {
    productList: {
      item: {
        border: {
          default: background.neutral.lighter40,
        },
        background: {
          default: background.white,
          hover: background.neutral.lighter48,
        },
      },
    },
  };
}

const styled = originStyled as ThemedBaseStyledInterface<
  IProductListModuleTheme
>;
const css = originCss as BaseThemedCssFunction<IProductListModuleTheme>;
const withTheme = originWithTheme as BaseWithThemeFnInterface<
  IProductListModuleTheme
>;
const createGlobalStyle = originCreateGlobalStyle as <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, IProductListModuleTheme>>,
  ...interpolations: Array<
    Interpolation<ThemedStyledProps<P, IProductListModuleTheme>>
  >
) => GlobalStyleComponent<P, IProductListModuleTheme>;
const ThemeProvider = OriginThemeProvider as React.ComponentClass<
  ThemeProviderProps<IProductListModuleTheme, IProductListModuleTheme>,
  any
>;
const ThemeConsumer = OriginThemeConsumer as React.ExoticComponent<
  React.ConsumerProps<IProductListModuleTheme>
>;

export const theme = new ProductListModuleTheme();

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
  ThemeConsumer,
};
