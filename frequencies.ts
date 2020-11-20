import { fold, inc, mapUpdateOrDefault } from "./mod.ts";

/**
 * Returns a frequency table created from the list, in a Map data structure
 * @param {T[]} list 
 * @returns {Map<T, number>}
 */
export function frequencies<T>(list: T[]): Map<T, number> {
  return fold(
    (acc, item) => mapUpdateOrDefault(item, 1, inc, acc),
    new Map(),
    list,
  );
}
