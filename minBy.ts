/**
 * Returns the smaller of originals from applying the function to both items
 * @param {(T) => T} fn 
 * @param {T} x 
 * @param {T} y
 * @returns {T} 
 */
export function minBy<T>(fn: (item: T) => number, x: T, y: T): T {
    return fn(x) < fn(y) ? x : y;
}