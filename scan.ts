import { last } from "./mod.ts";

/**
 * Iterates through an array, building a value,
 * returning every step in an array
 * @param {(U, T) => U} fn 
 * @param {U} init 
 * @param {T[]} list 
 */
export function scan<T, U>(fn: (acc: U, x: T) => U, init: U, list: T[]): U[] {
  const results = [init];

  for (const item of list) {
    const currentResult = last(results);
    const newItem = fn(currentResult, item);
    results.push(newItem);
  }
  return results;
}
