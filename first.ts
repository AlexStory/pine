import { enumerate, length } from "./mod.ts";

/**
 * Returns all but the last item in a list
 * @param {T[]} list 
 * @returns {T[]}
 */
export function first<T>(list: T[]): T[] {
  const results: T[] = [];

  for (const [i, item] of enumerate(list)) {
    if (i < length(list) - 1) results.push(item);
  }

  return results;
}
