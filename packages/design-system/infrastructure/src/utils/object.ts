import { NonNullable } from '../models';
import { isNull } from './validators';

/**
 * Creates an new object from the object properties
 */
export function pick(target: object, keys: string[]): { [key: string]: any } {
  return keys.reduce((result, key) => {
    if (target[key]) {
      result[key] = target[key];
    }
    return result;
  }, {});
}
/**
 * Creates an object composed of the object properties predicate returns truthy for.
 */
export function pickBy(target: object): { [key: string]: any } {
  const obj = {};
  for (const key in target) {
    if (
      target[key] !== null &&
      target[key] !== false &&
      target[key] !== undefined
    ) {
      obj[key] = target[key];
    }
  }
  return obj;
}
/**
 * get property value by property path
 */
export function getPropertyValue(
  target: any,
  propPath: string
): NonNullable<any> {
  if (isNull(target)) {
    return target;
  }

  const _props = propPath.split('.');
  let _prop;
  let result;

  for (let i = 0; i < _props.length; i++) {
    _prop = i === 0 ? target[_props[i]] : _prop[_props[i]];

    if (isNull(_prop)) {
      break;
    }
  }

  result = _prop;

  return result;
}
