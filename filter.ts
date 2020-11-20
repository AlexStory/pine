/**
 * Filters a list of items, to only the ones passing the condition
 * @param {(T) => boolean} pred takes an item and returns a boolean
 * @param {T[]} list
 * @returns {T[]} 
 */
export function filter<T>(pred: (item: T) => boolean, list: T[]): T[] {
  const results = [];

  for (const item of list) {
    if (pred(item)) {
      results.push(item);
    }
  }

  return results;
}
