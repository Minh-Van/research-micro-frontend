import * as BACKGROUND_MODULE from './background';
import * as PALATTE_MODULE from './palette';
import * as TEXT_MODULE from './text';

export const COLOR = {
  ...BACKGROUND_MODULE.BACKGROUND,
  ...PALATTE_MODULE.PALETTE,
  ...TEXT_MODULE.TEXT,
};
