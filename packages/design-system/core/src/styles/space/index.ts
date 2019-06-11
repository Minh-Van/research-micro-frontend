import { isInt } from '@design-system/infrastructure/utils';

let _baseUnit = 4;

export const SPACE = {
  SPACE_XXS: scaleSpacePx(1),
  SPACE_XS: scaleSpacePx(2),
  SPACE_S: scaleSpacePx(4),
  SPACE_M: scaleSpacePx(6),
  SPACE_L: scaleSpacePx(8),
  SPACE_XL: scaleSpacePx(12),
  SPACE_XXL: scaleSpacePx(16),
  SPACE_XXXL: scaleSpacePx(32),
};

export function setBaseSpaceUnit(value: number): void {
  _baseUnit = value;
}

export function scaleSpace(
  increment: number,
  baseUnit: number = _baseUnit
): number {
  const _isInt = isInt(increment);

  if (!_isInt) {
    throw new Error(`Paramenter 'increment' requires an integer`);
  }

  return baseUnit * increment;
}

export function scaleSpacePx(increment: number): string {
  return `${scaleSpace(increment)}px`;
}
