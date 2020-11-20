import { range } from "./mod.ts";

/**
 * Repeats an `item` `count` times
 * @param {number} count 
 * @param {T} item
 * @returns {T[]} 
 */
export function repeat<T>(count: number, item: T): T[] {
  const results: T[] = [];

  if (count == 0) return results;

  for (const _ of range(1, count)) {
    results.push(item);
  }

  return results;
}
