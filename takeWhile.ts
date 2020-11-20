/**
 * Returns every item in an array until it gets a value that does not
 * satisfy the given fuction
 * @param {(T) => boolean} pred function to test items against
 * @param {T[]} list
 * @returns {T[]} 
 */
export function takeWhile<T>(pred: (x: T) => boolean, list: T[]): T[] {
  const results = [];
  for (const item of list) {
    if (pred(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}
