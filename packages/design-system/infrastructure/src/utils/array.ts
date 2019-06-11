import { isNull, isString, isDate } from './validators';
import { getPropertyValue } from './object';

/**
 * Flattens array a single level deep.
 */
export function flatten(target: any[]): any[] {
  return target.reduce((array, item) => array.concat(item), []);
}
/**
 * Recursively flattens array.
 */
export function flattenDeep(target: any[]): any[] {
  return Array.isArray(target)
    ? target.reduce((array, item) => array.concat(flattenDeep(item)), [])
    : [target];
}
/**
 * Returns an object composed from key-value pairs.
 */
export function fromPairs(target: any[][]): { [key: string]: any } {
  return target.reduce(
    (result, item) => ((result[item[0].toString()] = item[1]), result),
    {}
  );
}
/**
 * Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.
 */
export function intersection(target: any[][]): any[] {
  return target.reduce((array1, array2) =>
    array1.filter(item => array2.includes(item))
  );
}
/**
 * returns the values from array that are not present in the other arrays.
 */
export function difference(target: any[][]): any[] {
  return target.reduce((array1, array2) =>
    array1.filter(item => array2.includes(item))
  );
}
/**
 * Group items by key.
 */
export function groupBy<T>(
  target: T[],
  getGroupedKey: (item: T) => string
): { [key: string]: T[] } {
  return target.reduce((result, item) => {
    const _key = getGroupedKey(item);
    (result[_key] || (result[_key] = [])).push(item);
    return result;
  }, {});
}
/**
 * Find the minimum collection item
 */
export function minBy<T, K>(target: T[], getCompareValue: (item: T) => K): T {
  return target.reduce((item1, item2) =>
    getCompareValue(item1) <= getCompareValue(item2) ? item1 : item2
  );
}
/**
 * Find the maximum collection item
 */
export function maxBy<T, K>(target: T[], getCompareValue: (item: T) => K): T {
  return target.reduce((item1, item2) =>
    getCompareValue(item1) >= getCompareValue(item2) ? item1 : item2
  );
}
/**
 * Produces a duplicate-free version of the array
 */
export function unique<T>(target: T[]): T[] {
  return Array.from(new Set(target));
}
/**
 * Sort the array, support use objet property path
 */
export function sortBy<T>(target: T[], by: string, type: 'asc' | 'desc'): T[] {
  return target.sort((item1, item2) => {
    const _order = type === 'desc' ? -1 : 1;
    const _item1Value = getPropertyValue(item1, by);
    const _item2Value = getPropertyValue(item2, by);

    if (isNull(_item1Value)) {
      return 1 * _order;
    }
    if (isNull(_item2Value)) {
      return -1 * _order;
    }
    if (isString(_item1Value)) {
      return _item1Value.localeCompare(_item2Value) * _order;
    }
    if (isDate(_item1Value)) {
      return (_item1Value.getTime() - _item2Value.getTime()) * _order;
    }

    return (_item1Value - _item2Value) * _order;
  });
}
