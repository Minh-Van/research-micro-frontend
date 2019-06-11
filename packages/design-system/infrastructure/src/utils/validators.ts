export function isString(target: any): boolean {
  return target && typeof target === 'string';
}

export function isNumber(target: any): boolean {
  return isNotEmpty(target, true) && !isNaN(target);
}

export function isInt(target: any): boolean {
  return isNumber(target) && +target % 1 === 0;
}

export function isObject(target: any): boolean {
  return target && typeof target === 'object';
}

export function isDate(target: any): boolean {
  return target && Object.prototype.toString.call(target) === '[object Date]';
}

export function isArray(target: any): boolean {
  return target && Object.prototype.toString.call(target) === '[object Array]';
}

export function isFunction(target: any): boolean {
  return target && typeof target === 'function';
}

export function isNull(target: any): boolean {
  return target === undefined || target === null;
}

export function isNotNull(target: any): boolean {
  return !isNull(target);
}

export function isEmpty(
  target: any,
  noWhiteSpace: boolean = false,
  noZero: boolean = false
): boolean {
  return (
    isNull(target) ||
    target === '' ||
    (noWhiteSpace ? isString(target) && target.trim().length === 0 : false) ||
    (noZero ? target === 0 : false)
  );
}

export function isNotEmpty(
  target: any,
  noWhiteSpace: boolean = false,
  noZero: boolean = false
): boolean {
  return !isEmpty(target, noWhiteSpace, noZero);
}

export function isEmail(target: any): boolean {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return isNotEmpty(target) && regex.test(target.toLowerCase());
}
