/**
 * Iterates over a function and builds a value
 * @param {(acc, T) => U} fn 
 * @param {U} init 
 * @param {T[]} list
 * @returns {U} the final value after iteration 
 */
export function fold<T, U>(fn: (acc: U, x: T) => U, init: U, list: T[]): U {
  let result = init;

  for (const item of list) {
    result = fn(result, item);
  }

  return result;
}
