/**
 * Returns the result of applying a function to every item in an array
 * @param {(T) => U} fn 
 * @param {T[]} list 
 * @returns {U[]}
 */
export function map<T, U>(fn: (x: T) => U, list: T[]): U[] {
  const results = [];
  for (const item of list) {
    results.push(fn(item));
  }

  return results;
}
