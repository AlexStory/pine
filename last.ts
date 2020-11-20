import { length } from "./mod.ts";

/**
 * Returns the last item in a list
 * @param {T[]} list
 * @returns {T} 
 */
export function last<T>(list: T[]): T {
  return list[length(list) - 1];
}
