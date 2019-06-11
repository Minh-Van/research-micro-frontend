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
import { ITypographyTheme } from '../components/Typography';

export interface ITheme {
  id: string;
  isLightTheme: boolean;
  isDarkTheme: boolean;
}

export interface ICoreTheme extends ITheme {
  id: string;
  isLightTheme: boolean;
  isDarkTheme: boolean;
  // #region typography
  typography: {
    h1: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    h2: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    h3: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    h4: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    bodyL: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    bodyM: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    bodyS: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    link: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
    quote: {
      color: string;
      fontFamily: string;
      fontSize: string;
      fontWeight: number | string;
      lineHeight: string;
      letterSpacing: string;
    };
  };
  // #endregion
  // #region space
  space: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  // #endregion
  /* #region  breakpoint */
  breakpoint: {
    '360px': string;
    '400px': string;
    '480px': string;
    '600px': string;
    '720px': string;
    '840px': string;
    '960px': string;
    '1024px': string;
    '1280px': string;
    '1440px': string;
    '1600px': string;
    '1920px': string;
  };
  /* #endregion */
  /* #region  opacity */
  opacity: {
    87: string;
    60: string;
    38: string;
  };
  /* #endregion */
  /* #region  radius */
  radius: {
    '2px': string;
    '4px': string;
    '8px': string;
    circle: string;
  };
  /* #endregion */
  components: ICoreComponentsTheme;
}

export interface ICoreComponentsTheme {
  typography?: ITypographyTheme;
}

const styled = originStyled as ThemedBaseStyledInterface<ICoreTheme>;
const css = originCss as BaseThemedCssFunction<ICoreTheme>;
const withTheme = originWithTheme as BaseWithThemeFnInterface<ICoreTheme>;
const createGlobalStyle = originCreateGlobalStyle as <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, ICoreTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, ICoreTheme>>>
) => GlobalStyleComponent<P, ICoreTheme>;
const ThemeProvider = OriginThemeProvider as React.ComponentClass<
  ThemeProviderProps<ICoreTheme, ICoreTheme>,
  any
>;
const ThemeConsumer = OriginThemeConsumer as React.ExoticComponent<
  React.ConsumerProps<ICoreTheme>
>;

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
  ThemeConsumer,
};
