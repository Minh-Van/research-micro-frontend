import { FONT_FAMILY } from './font-family';
import { FONT_SIZE } from './font-size';
import { FONT_WEIGHT } from './font-weight';
import { LETTER_SPACING } from './letter-spacing';
import { LINE_HEIGHT } from './line-height';

export const TYPO = {
  ...FONT_FAMILY,
  ...FONT_SIZE,
  ...FONT_WEIGHT,
  ...LETTER_SPACING,
  ...LINE_HEIGHT,
};

export { mixTypography } from './mixins';
export {
  setBaseFontSizeUnit,
  scaleFontSize,
  scaleFontSizePx,
} from './font-size';
