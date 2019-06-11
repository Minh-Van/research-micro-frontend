import { isNumber } from '@design-system/infrastructure/utils';
import { ITypographyProps, ITypographyTheme } from '../models';

export function mixTypography(
  props: ITypographyProps,
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'bodyL'
    | 'bodyM'
    | 'bodyS'
    | 'link'
    | 'quote'
): string {
  const {
    padding = '',
    margin,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    textTransform,
    whiteSpace,
    wordBreak,
  } = props;
  const typography = props.theme.components.typography as ITypographyTheme;

  return `
    margin: ${margin ? (isNumber(margin) ? `${margin}px` : margin) : 0};
    padding: ${isNumber(padding) ? `${padding}px` : padding};
    color: ${!color ? typography[type].color : color === 'none' ? '' : color};
    font-family: ${fontFamily || typography[type].fontFamily};
    font-size: ${
      fontSize
        ? isNumber(fontSize)
          ? `${fontSize}px`
          : fontSize
        : typography[type].fontSize
    };
    font-weight: ${fontWeight || typography[type].fontWeight};
    line-height: ${lineHeight || typography[type].lineHeight};
    letter-spacing: ${letterSpacing || typography[type].letterSpacing};
    text-align: ${textAlign || ''};
    text-transform: ${textTransform || ''};
    white-space: ${whiteSpace || ''};
    word-break: ${wordBreak || ''};
  `;
}
