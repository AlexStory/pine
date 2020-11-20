import { length } from "./mod.ts";

/**
 * Groups a list into a list of lists by every `count` items
 * leaves off extraneous items
 * @param {number} count size of the groups
 * @param {T[]} list
 * @returns {T[][]}
 */
export function chunkEvery<T>(count: number, list: T[]): T[][] {
  const results = [];
  let current = [];

  for (const item of list) {
    current.push(item);

    if (length(current) == count) {
      results.push(current);
      current = [];
    }
  }

  return results;
}
