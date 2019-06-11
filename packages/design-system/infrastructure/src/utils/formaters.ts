import { Nullable } from '../models';

export function lineBreakToBr(target: string): string {
  return target ? target.replace(/(?:\r\n|\r|\n)/g, '<br/>') : target;
}

export function toCamelCase(target: string): string {
  return target.replace(/(-[a-z])/g, char =>
    char.toUpperCase().replace('-', '')
  );
}

export function toHypenCase(target: string): string {
  return target.replace(/([A-Z])/g, char => `-${char.toLowerCase()}`);
}

export function padNumber(target: number, length: number = 2): string {
  let _prefix = '0';
  let _max = 10;

  for (let i = 1; i < length - 1; i++) {
    _prefix += _prefix;
    _max *= _max;
  }

  return target < _max ? `${_prefix}${target}` : `${target}`;
}

export function toISO8601String(target: Date): Nullable<string> {
  if (!target) {
    return undefined;
  }

  const _timezone = -target.getTimezoneOffset();
  const _diff = _timezone >= 0 ? '+' : '-';
  const _pad = value => {
    const _norm = Math.floor(Math.abs(value));
    return (_norm < 10 ? '0' : '') + _norm;
  };

  return (
    target.getFullYear() +
    '-' +
    _pad(target.getMonth() + 1) +
    '-' +
    _pad(target.getDate()) +
    'T' +
    _pad(target.getHours()) +
    ':' +
    _pad(target.getMinutes()) +
    ':' +
    _pad(target.getSeconds()) +
    _diff +
    _pad(_timezone / 60) +
    ':' +
    _pad(_timezone % 60)
  );
}

export function toTimestamp(
  target: Date,
  unit: 'milisecond' | 'second' = 'second'
): number {
  return target.getTime() / (unit && unit === 'second' ? 1000 : 1);
}
