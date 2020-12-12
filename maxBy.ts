/**
 * Returns the item who returns a smaller value from applying the function
 * @param {(T) => number} fn 
 * @param {T} x 
 * @param {T} y 
 */
export function maxBy<T>(fn: (item: T) => number, x: T, y: T): T {
  return fn(x) > fn(y) ? x : y;
}