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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProductDetailModuleTheme extends IDefaultTheme { }

export class ProductDetailModuleTheme extends DefaultTheme
  implements IProductDetailModuleTheme {
  id = 'ProductDetailModuleTheme';
  isLightTheme = true;
  isDarkTheme = false;
}

const styled = originStyled as ThemedBaseStyledInterface<
  IProductDetailModuleTheme
>;
const css = originCss as BaseThemedCssFunction<IProductDetailModuleTheme>;
const withTheme = originWithTheme as BaseWithThemeFnInterface<
  IProductDetailModuleTheme
>;
const createGlobalStyle = originCreateGlobalStyle as <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, IProductDetailModuleTheme>>,
  ...interpolations: Array<
    Interpolation<ThemedStyledProps<P, IProductDetailModuleTheme>>
  >
) => GlobalStyleComponent<P, IProductDetailModuleTheme>;
const ThemeProvider = OriginThemeProvider as React.ComponentClass<
  ThemeProviderProps<IProductDetailModuleTheme, IProductDetailModuleTheme>,
  any
>;
const ThemeConsumer = OriginThemeConsumer as React.ExoticComponent<
  React.ConsumerProps<IProductDetailModuleTheme>
>;

export const theme = new ProductDetailModuleTheme();

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
  ThemeConsumer,
};
