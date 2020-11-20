import { indexMap } from "./indexMap.ts";
import { length, minBy } from "./mod.ts";

/**
 * Zips two arrays together into an array of tuples. Extra items from the longer will be ignored
 * @param {T[]}first 
 * @param {U[]} second
 * @returns {[T, U][]} 
 */
export function zip<T, U>(first: T[], second: U[]): [T, U][] {
  const smaller = minBy(length, (first as (T | U)[]), (second as (T | U)[]));
  return indexMap(
    (idx, _item) => [first[idx], second[idx]],
    smaller,
  );
}
