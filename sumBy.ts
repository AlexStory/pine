/**
 * returns the sum of applying `fn` to all items in `list`
 * @param {(T) => number} fn
 * @param {T[]} list
 * @returns {number}
 */
import { map, sum } from "./mod.ts";
export function sumBy<T>(fn: (item: T) => number, list: T[]): number {
  const nums = map(fn, list);
  return sum(nums);
}
