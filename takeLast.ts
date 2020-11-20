import { reverse, take } from "./mod.ts";

/**
 * Take `count` items from the end of an Array
 * @param {number} count number of items to take
 * @param {T[]} list 
 */
export function takeLast<T>(count: number, list: T[]): T[] {
  const reversed = reverse(list);
  const counted = take(count, reversed);
  return reverse(counted);
}
