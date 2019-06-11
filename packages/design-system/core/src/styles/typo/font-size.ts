import { isInt } from '@design-system/infrastructure/utils';

let _baseUnit = 2;

export const FONT_SIZE = {
  TYPO_FONT_SIZE_H1: '48px',
  TYPO_FONT_SIZE_H2: '36px',
  TYPO_FONT_SIZE_H3: '24px',
  TYPO_FONT_SIZE_H4: '18px',
  TYPO_FONT_SIZE_BODY_L: '20px',
  TYPO_FONT_SIZE_BODY_M: '16px',
  TYPO_FONT_SIZE_BODY_S: '14px',
  TYPO_FONT_SIZE_LINK: '16px',
  TYPO_FONT_SIZE_QUOTE: '14px',
};

export function setBaseFontSizeUnit(value: number): void {
  _baseUnit = value;
}

export function scaleFontSize(
  increment: number,
  baseUnit: number = _baseUnit
): number {
  const _isInt = isInt(increment);

  if (!_isInt) {
    throw new Error(`Paramenter 'increment' requires an integer`);
  }

  return baseUnit * increment;
}

export function scaleFontSizePx(increment: number): string {
  return `${scaleFontSize(increment)}px`;
}
