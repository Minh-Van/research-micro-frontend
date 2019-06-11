import { FONT_FAMILY } from '../font-family';
import { FONT_SIZE } from '../font-size';
import { FONT_WEIGHT } from '../font-weight';
import { LINE_HEIGHT } from '../line-height';
import { LETTER_SPACING } from '../letter-spacing';

// eslint-disable-next-line @typescript-eslint/prefer-interface
type OptionType = {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  wordBreak?:
    | 'normal'
    | 'break-all'
    | 'keep-all'
    | 'break-word'
    | 'initial'
    | 'inherit';
};

export function mixTypography(
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'bodyL'
    | 'bodyM'
    | 'bodyS'
    | 'link'
    | 'quote',
  options?: OptionType
): string {
  const {
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    wordBreak,
  } = (options || {}) as OptionType;

  switch (type) {
    case 'h1':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_H1};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_H1};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_H1};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'h2':
      return `
    color: ${color || ''};
    font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
    font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_H2};
    font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_H2};
    line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_H2};
    letter-spacing: ${letterSpacing ||
      LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
      word-break: ${wordBreak || 'break-word'};
  `;
    case 'h3':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_H3};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_H3};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_H3};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'h4':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_H4};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_H4};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_H4};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'bodyL':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_BODY_L};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_BODY_L};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_BODY_L};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'bodyM':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_BODY_M};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_BODY_M};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_BODY_M};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'bodyS':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_BODY_S};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_BODY_S};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_BODY_S};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'link':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_LINK};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_LINK};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_LINK};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
          word-break: ${wordBreak || 'break-word'};
      `;
    case 'quote':
      return `
        color: ${color || ''};
        font-family: ${fontFamily || FONT_FAMILY.TYPO_FONT_FAMILY_DEFAULT};
        font-size: ${fontSize || FONT_SIZE.TYPO_FONT_SIZE_QUOTE};
        font-weight: ${fontWeight || FONT_WEIGHT.TYPO_FONT_WEIGHT_QUOTE};
        line-height: ${lineHeight || LINE_HEIGHT.TYPO_LINE_HEIGHT_QUOTE};
        letter-spacing: ${letterSpacing ||
          LETTER_SPACING.TYPO_LETTER_SPACING_DEFAULT};
        word-break: ${wordBreak || 'break-word'};
      `;
    default:
      return '';
  }
}
