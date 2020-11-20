import { indexMap } from "./mod.ts";

/**
 * Enumerates a list of items into tuples of [index, item]
 * @param {T[]}list
 * @returns {[number, T][]} 
 */
export function enumerate<T>(list: T[]): [number, T][] {
  return indexMap((i, item) => [i, item], list);
}
