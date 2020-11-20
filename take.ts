import { length } from "./mod.ts";

/**
 * Returns the first `count` items in an array
 * @param {number} count number of items to take
 * @param {T[]} list
 * @returns {T[]} 
 */
export function take<T>(count: number, list: T[]): T[] {
  var results: T[] = [];

  for (const item of list) {
    if (length(results) < count) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}
