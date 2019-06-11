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
import * as CORE_STYLES_MODULE from '@design-system/core/styles';
import { ICoreTheme, ICoreComponentsTheme } from '@design-system/core/models';
import * as APP_STYLES_MODULE from '../styles';

const {
  TYPO,
  OPACITY,
  RADIUS,
  SPACE,
  BREAKPOINT,
  mixTypography,
  scaleFontSizePx,
  scaleSpacePx,
} = CORE_STYLES_MODULE;
const {
  COLOR,
  TYPO: { TYPO_FONT_FAMILY_RALEWAY, TYPO_FONT_FAMILY_ROBOTO },
  mixNormalize,
} = APP_STYLES_MODULE;

export interface IDefaultTheme extends ICoreTheme {
  // #region background
  background: {
    dark: string;
    white: string;
    primary: {
      darker14: string;
      base: string;
      lighter37: string;
      contrast: {
        darker14: string;
        base: string;
        lighter37: string;
      };
    };
    secondary: {
      darker10: string;
      base: string;
      lighter30: string;
      contrast: {
        darker10: string;
        base: string;
        lighter30: string;
      };
    };
    neutral: {
      darker40: string;
      darker20: string;
      base: string;
      lighter20: string;
      lighter30: string;
      lighter40: string;
      lighter48: string;
      contrast: {
        darker40: string;
        darker20: string;
        base: string;
        lighter20: string;
        lighter30: string;
        lighter40: string;
        lighter48: string;
      };
    };
    error: {
      darker14: string;
      base: string;
      lighter38: string;
      contrast: {
        darker14: string;
        base: string;
        lighter38: string;
      };
    };
  };
  // #endregion
  // #region foreground
  foreground: {
    '01': string;
    '02': string;
    '03': string;
    inverse: string;
    link: string;
    errorMessage: string;
    primary: {
      darker14: string;
      base: string;
      lighter37: string;
    };
    secondary: {
      darker10: string;
      base: string;
      lighter30: string;
    };
    neutral: {
      darker40: string;
      darker20: string;
      base: string;
      lighter20: string;
      lighter30: string;
      lighter40: string;
      lighter48: string;
    };
    error: {
      darker14: string;
      base: string;
      lighter38: string;
    };
  };
  // #endregion
  setComponentTheme(
    ...funcs: Array<(theme: IDefaultTheme) => ICoreComponentsTheme>
  ): void;
}

export class DefaultTheme implements IDefaultTheme {
  id = 'DefaultTheme';
  isLightTheme = true;
  isDarkTheme = false;
  typography = {
    h1: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_RALEWAY,
      fontSize: TYPO.TYPO_FONT_SIZE_H1,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_H1,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_H1,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    h2: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_RALEWAY,
      fontSize: TYPO.TYPO_FONT_SIZE_H2,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_H2,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_H2,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    h3: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_RALEWAY,
      fontSize: TYPO.TYPO_FONT_SIZE_H3,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_H3,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_H3,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    h4: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_RALEWAY,
      fontSize: TYPO.TYPO_FONT_SIZE_H3,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_H3,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_H3,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    bodyL: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_ROBOTO,
      fontSize: TYPO.TYPO_FONT_SIZE_BODY_L,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_BODY_L,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_BODY_L,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    bodyM: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_ROBOTO,
      fontSize: TYPO.TYPO_FONT_SIZE_BODY_M,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_BODY_M,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_BODY_M,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    bodyS: {
      color: COLOR.COLOR_TEXT_01,
      fontFamily: TYPO_FONT_FAMILY_ROBOTO,
      fontSize: TYPO.TYPO_FONT_SIZE_BODY_S,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_BODY_S,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_BODY_S,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    link: {
      color: COLOR.COLOR_TEXT_LINK,
      fontFamily: TYPO_FONT_FAMILY_ROBOTO,
      fontSize: TYPO.TYPO_FONT_SIZE_LINK,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_LINK,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_LINK,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
    quote: {
      color: COLOR.COLOR_TEXT_02,
      fontFamily: TYPO_FONT_FAMILY_ROBOTO,
      fontSize: TYPO.TYPO_FONT_SIZE_QUOTE,
      fontWeight: TYPO.TYPO_FONT_WEIGHT_QUOTE,
      lineHeight: TYPO.TYPO_LINE_HEIGHT_QUOTE,
      letterSpacing: TYPO.TYPO_LETTER_SPACING_DEFAULT,
    },
  };
  background = {
    dark: COLOR.COLOR_BACKGROUND_DARK,
    white: COLOR.COLOR_BACKGROUND_WHITE,
    primary: {
      darker14: COLOR.COLOR_PALETTE_BLUE_DARKER_14,
      base: COLOR.COLOR_PALETTE_BLUE_BASE,
      lighter37: COLOR.COLOR_PALETTE_BLUE_LIGHTER_37,
      contrast: {
        darker14: COLOR.COLOR_TEXT_INVERSE,
        base: COLOR.COLOR_TEXT_INVERSE,
        lighter37: COLOR.COLOR_TEXT_01,
      },
    },
    secondary: {
      darker10: COLOR.COLOR_PALETTE_PURPLE_DARKER_10,
      base: COLOR.COLOR_PALETTE_PURPLE_BASE,
      lighter30: COLOR.COLOR_PALETTE_PURPLE_LIGHTER_30,
      contrast: {
        darker10: COLOR.COLOR_TEXT_INVERSE,
        base: COLOR.COLOR_TEXT_INVERSE,
        lighter30: COLOR.COLOR_TEXT_01,
      },
    },
    neutral: {
      darker40: COLOR.COLOR_PALETTE_GRAY_DARKER_40,
      darker20: COLOR.COLOR_PALETTE_GRAY_DARKER_20,
      base: COLOR.COLOR_PALETTE_GRAY_BASE,
      lighter20: COLOR.COLOR_PALETTE_GRAY_LIGHTER_20,
      lighter30: COLOR.COLOR_PALETTE_GRAY_LIGHTER_30,
      lighter40: COLOR.COLOR_PALETTE_GRAY_LIGHTER_40,
      lighter48: COLOR.COLOR_PALETTE_GRAY_LIGHTER_48,
      contrast: {
        darker40: COLOR.COLOR_TEXT_INVERSE,
        darker20: COLOR.COLOR_TEXT_INVERSE,
        base: COLOR.COLOR_TEXT_01,
        lighter20: COLOR.COLOR_TEXT_01,
        lighter30: COLOR.COLOR_TEXT_01,
        lighter40: COLOR.COLOR_TEXT_01,
        lighter48: COLOR.COLOR_TEXT_01,
      },
    },
    error: {
      darker14: COLOR.COLOR_PALETTE_RED_DARKER_14,
      base: COLOR.COLOR_PALETTE_RED_BASE,
      lighter38: COLOR.COLOR_PALETTE_RED_LIGHTER_38,
      contrast: {
        darker14: COLOR.COLOR_TEXT_INVERSE,
        base: COLOR.COLOR_TEXT_INVERSE,
        lighter38: COLOR.COLOR_TEXT_01,
      },
    },
  };
  foreground = {
    '01': COLOR.COLOR_TEXT_01,
    '02': COLOR.COLOR_TEXT_02,
    '03': COLOR.COLOR_TEXT_03,
    inverse: COLOR.COLOR_TEXT_INVERSE,
    link: COLOR.COLOR_TEXT_LINK,
    errorMessage: COLOR.COLOR_TEXT_ERROR,
    primary: {
      darker14: COLOR.COLOR_PALETTE_BLUE_DARKER_14,
      base: COLOR.COLOR_PALETTE_BLUE_BASE,
      lighter37: COLOR.COLOR_PALETTE_BLUE_LIGHTER_37,
    },
    secondary: {
      darker10: COLOR.COLOR_PALETTE_PURPLE_DARKER_10,
      base: COLOR.COLOR_PALETTE_PURPLE_BASE,
      lighter30: COLOR.COLOR_PALETTE_PURPLE_LIGHTER_30,
    },
    neutral: {
      darker40: COLOR.COLOR_PALETTE_GRAY_DARKER_40,
      darker20: COLOR.COLOR_PALETTE_GRAY_DARKER_20,
      base: COLOR.COLOR_PALETTE_GRAY_BASE,
      lighter20: COLOR.COLOR_PALETTE_GRAY_LIGHTER_20,
      lighter30: COLOR.COLOR_PALETTE_GRAY_LIGHTER_30,
      lighter40: COLOR.COLOR_PALETTE_GRAY_LIGHTER_40,
      lighter48: COLOR.COLOR_PALETTE_GRAY_LIGHTER_48,
    },
    error: {
      darker14: COLOR.COLOR_PALETTE_RED_DARKER_14,
      base: COLOR.COLOR_PALETTE_RED_BASE,
      lighter38: COLOR.COLOR_PALETTE_RED_LIGHTER_38,
    },
  };
  space = {
    xxs: SPACE.SPACE_XXS,
    xs: SPACE.SPACE_XS,
    s: SPACE.SPACE_S,
    m: SPACE.SPACE_M,
    l: SPACE.SPACE_L,
    xl: SPACE.SPACE_XL,
    xxl: SPACE.SPACE_XXL,
    xxxl: SPACE.SPACE_XXXL,
  };
  breakpoint = {
    '360px': BREAKPOINT.BREAKPOINT_360PX,
    '400px': BREAKPOINT.BREAKPOINT_400PX,
    '480px': BREAKPOINT.BREAKPOINT_480PX,
    '600px': BREAKPOINT.BREAKPOINT_600PX,
    '720px': BREAKPOINT.BREAKPOINT_720PX,
    '840px': BREAKPOINT.BREAKPOINT_840PX,
    '960px': BREAKPOINT.BREAKPOINT_960PX,
    '1024px': BREAKPOINT.BREAKPOINT_1024PX,
    '1280px': BREAKPOINT.BREAKPOINT_1280PX,
    '1440px': BREAKPOINT.BREAKPOINT_1440PX,
    '1600px': BREAKPOINT.BREAKPOINT_1600PX,
    '1920px': BREAKPOINT.BREAKPOINT_1920PX,
  };
  opacity = {
    87: OPACITY.OPACITY_87,
    60: OPACITY.OPACITY_60,
    38: OPACITY.OPACITY_38,
  };
  radius = {
    '2px': RADIUS.RADIUS_2PX,
    '4px': RADIUS.RADIUS_4PX,
    '8px': RADIUS.RADIUS_8PX,
    circle: RADIUS.RADIUS_CIRCLE,
  };
  components: ICoreComponentsTheme = {};

  setComponentTheme(
    ...funcs: Array<(theme: IDefaultTheme) => ICoreComponentsTheme>
  ): void {
    this.components = {
      ...this.components,
      ...funcs.reduce(
        (result, func) => ({
          ...result,
          ...func(this),
        }),
        {} as ICoreComponentsTheme
      ),
    };
  }
}

export function getAllComponentTheme(
  theme: IDefaultTheme
): ICoreComponentsTheme {
  return {
    ...getTypographyTheme(theme),
  };
}

export function getTypographyTheme(theme: IDefaultTheme): ICoreComponentsTheme {
  return {
    typography: {
      ...theme.typography,
    },
  };
}

const styled = originStyled as ThemedBaseStyledInterface<IDefaultTheme>;
const css = originCss as BaseThemedCssFunction<IDefaultTheme>;
const withTheme = originWithTheme as BaseWithThemeFnInterface<IDefaultTheme>;
const createGlobalStyle = originCreateGlobalStyle as <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, IDefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, IDefaultTheme>>>
) => GlobalStyleComponent<P, IDefaultTheme>;
const ThemeProvider = OriginThemeProvider as React.ComponentClass<
  ThemeProviderProps<IDefaultTheme, IDefaultTheme>,
  any
>;
const ThemeConsumer = OriginThemeConsumer as React.ExoticComponent<
  React.ConsumerProps<IDefaultTheme>
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

export const theme = new DefaultTheme();

export const GlobalStyle = createGlobalStyle`
  ${props => {
    const {
      typography: { h1, h2, h3, h4, bodyM, bodyL, link, quote },
      space,
    } = props.theme;

    return `
      ${mixNormalize()}

      html {
        ${mixTypography('bodyM', {
      fontFamily: bodyM.fontFamily,
    })}
      }

      h1 {
        ${mixTypography('h1', {
      color: h1.color,
      fontFamily: h1.fontFamily,
    })}
        margin-bottom: ${space.m};
      }
      h2 {
        ${mixTypography('h2', {
      color: h2.color,
      fontFamily: h2.fontFamily,
      fontSize: scaleFontSizePx(16),
      lineHeight: scaleSpacePx(10),
    })}
        margin-bottom: ${space.m};
      }
      h3 {
        ${mixTypography('h3', {
      color: h3.color,
      fontFamily: h3.fontFamily,
    })}
        margin-bottom: ${space.m};
      }
      h4 {
        ${mixTypography('h4', {
      color: h4.color,
      fontFamily: h4.fontFamily,
    })}
        margin-bottom: ${space.s};
      }
      p {
        ${mixTypography('bodyM', {
      color: bodyM.color,
      fontFamily: bodyM.fontFamily,
    })}
      }
      .ego-body-text-l {
        ${mixTypography('bodyL', {
      color: bodyL.color,
      fontFamily: bodyL.fontFamily,
    })}
      }
      .ego-text-align-left {
        text-align: left;
      }
      .ego-text-align-right {
        text-align: right;
      }
      .ego-text-align-center {
        text-align: center;
      }
      a,
      a > div,
      a > span,
      a > div > p,
      a > span > p {
        ${mixTypography('link', {
      color: link.color,
      fontFamily: link.fontFamily,
    })}
      }
      blockquote {
        ${mixTypography('quote', {
      color: quote.color,
      fontFamily: quote.fontFamily,
    })}
      }
      br {
        margin-bottom: ${space.s};
      }
      ul {
        padding-left: ${space.s};
      }

      @media screen and (min-width: ${BREAKPOINT.BREAKPOINT_600PX}) {
        h2 {
          font-size: ${h2.fontSize};
          line-height: ${h2.lineHeight};
        }
      }
    `;
  }}
`;
