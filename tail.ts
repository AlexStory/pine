import { enumerate, length } from "./mod.ts";

/**
 * Returns every item after the head of an array
 * @param {T[]} list
 * @returns {T[]} 
 */
export function tail<T>(list: T[]): T[] {
  const results = [];

  const enumerated = enumerate(list);

  for (let i = 1; i < length(list); i++) {
    results.push(list[i]);
  }
  return results;
}
