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
export interface IMySiteAppTheme extends IDefaultTheme {
  views: IMySiteViewsTheme;
  setViewTheme(
    ...funcs: Array<(theme: IMySiteAppTheme) => IMySiteViewsTheme>
  ): void;
}

export interface IMySiteViewsTheme {
  productList?: {
    item: {
      border: {
        default: string;
      };
      background: {
        default: string;
        hover: string;
      };
    };
  };
}

export class MySiteAppTheme extends DefaultTheme implements IMySiteAppTheme {
  id = 'MySiteAppTheme';
  isLightTheme = true;
  isDarkTheme = false;
  views: IMySiteViewsTheme = {};

  setViewTheme(
    ...funcs: Array<(theme: IMySiteAppTheme) => IMySiteViewsTheme>
  ): void {
    this.views = {
      ...this.views,
      ...funcs.reduce(
        (result, func) => ({
          ...result,
          ...func(this),
        }),
        {} as IMySiteViewsTheme
      ),
    };
  }
}

export function getAllViewTheme(theme: IMySiteAppTheme): IMySiteViewsTheme {
  return {
    ...getProductListViewTheme(theme),
  };
}

export function getProductListViewTheme(
  theme: IMySiteAppTheme
): IMySiteViewsTheme {
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

const styled = originStyled as ThemedBaseStyledInterface<IMySiteAppTheme>;
const css = originCss as BaseThemedCssFunction<IMySiteAppTheme>;
const withTheme = originWithTheme as BaseWithThemeFnInterface<IMySiteAppTheme>;
const createGlobalStyle = originCreateGlobalStyle as <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, IMySiteAppTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, IMySiteAppTheme>>>
) => GlobalStyleComponent<P, IMySiteAppTheme>;
const ThemeProvider = OriginThemeProvider as React.ComponentClass<
  ThemeProviderProps<IMySiteAppTheme, IMySiteAppTheme>,
  any
>;
const ThemeConsumer = OriginThemeConsumer as React.ExoticComponent<
  React.ConsumerProps<IMySiteAppTheme>
>;

export const theme = new MySiteAppTheme();

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
  ThemeConsumer,
};
