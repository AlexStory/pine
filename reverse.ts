/**
 * Returns the reverse order of a list
 * @param {T[]}list
 * @returns {T[]} 
 */
export function reverse<T>(list: T[]): T[] {
  const results = [];

  for (const item of list) {
    results.unshift(item);
  }

  return results;
}
