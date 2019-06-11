import Color from 'color';

import { Nullable, Colorable } from '../models';
import { isNull, isNotNull, isNumber, isString } from './validators';

export function parseString(target: any): string {
  if (isNull(target)) {
    return '';
  }
  if (isString(target)) {
    return target;
  }
  if (target.toString) {
    return target.toString();
  }

  return '';
}

export function parseNumber(target: any): number {
  return isNumber(target) ? Number(target) : 0;
}

export function parseBoolean(target: any): boolean {
  if (isNotNull(target)) {
    switch (target.toString().trim()) {
      case '1':
      case 'true':
        return true;
      case '0':
      case 'false':
        return false;
    }
  }

  return false;
}

export function parseDate(
  target: any,
  unit: 'milisecond' | 'second' = 'second'
): Nullable<Date> {
  return target && isNaN(target)
    ? new Date(target * (unit && unit === 'second' ? 1000 : 1))
    : undefined;
}

export function parseISO8601Date(target: any): Nullable<Date> {
  if (!target) {
    return undefined;
  }

  const date = new Date();
  const _match = target
    .toString()
    .match(
      new RegExp(
        /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/
      )
    );

  if (_match) {
    date.setUTCDate(1);
    date.setUTCFullYear(parseInt(_match[1], 10));
    date.setUTCMonth(parseInt(_match[3], 10) - 1);
    date.setUTCDate(parseInt(_match[5], 10));
    date.setUTCHours(parseInt(_match[7], 10));
    date.setUTCMinutes(parseInt(_match[9], 10));
    date.setUTCSeconds(parseInt(_match[11], 10));

    if (_match[12]) {
      date.setUTCMilliseconds(parseFloat(_match[12]) * 1000);
    } else {
      date.setUTCMilliseconds(0);
    }

    if (_match[13] !== 'Z') {
      let offset = _match[15] * 60 + parseInt(_match[17], 10);
      offset *= _match[14] === '-' ? -1 : 1;
      date.setTime(date.getTime() - offset * 60 * 1000);
    }
  } else {
    date.setTime(Date.parse(target));
  }

  return date;
}

export function parseColor(target: Colorable, alpha?: number): string {
  const color = Color(target);
  return alpha && alpha >= 0 ? color.alpha(alpha).string() : color.string();
}

export function parseHexColor(target: Colorable): string {
  return Color(target).hex();
}
