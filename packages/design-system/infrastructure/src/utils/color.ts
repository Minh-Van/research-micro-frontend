import Color from 'color';
import { parseNumber } from '../utils';

import { Colorable } from '../models';

export function hasAlpha(target: Colorable): boolean {
  return Color(target).alpha() != 1;
}

export function getAlpha(target: Colorable): number {
  return Color(target).alpha();
}

export function setAlpha(target: Colorable, alpha: number | string): string {
  const color = Color(target);
  const _alpha = parseNumber(alpha);

  return _alpha >= 0 ? color.alpha(_alpha).string() : color.string();
}

export function lighten(target: Colorable, ratio: number | string): string {
  const color = Color(target);
  const _ratio = parseNumber(ratio);

  return ratio >= 0 ? color.lighten(_ratio).string() : color.string();
}

export function darken(target: Colorable, ratio: number | string): string {
  const color = Color(target);
  const _ratio = parseNumber(ratio);

  return ratio >= 0 ? color.darken(_ratio).string() : color.string();
}
