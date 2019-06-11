import { isString, isObject } from './validators';
import { toHypenCase } from './formaters';
import { Nullable } from '../models';

export function getCssClass(
  ...target: Array<Nullable<string> | { [key: string]: Nullable<boolean> }>
): string {
  const cssClassSet = target.reduce((result: Set<string>, value) => {
    if (isString(value)) {
      result.add(value as string);
    } else if (isObject(value)) {
      Object.keys(value as object).forEach(key => {
        if ((value as object)[key]) {
          result.add(toHypenCase(toHypenCase(key)));
        }
      });
    }
    return result;
  }, new Set<string>());

  return Array.from(cssClassSet).join(' ');
}
