/**
 * Returns the first item of a list
 * @param {T[]} list 
 * @returns {T}
 */
export function head<T>(list: T[]): T {
  return list[0];
}
