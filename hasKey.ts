/**
 * Returns if the object has the given key
 * @param key 
 * @param obj 
 * @returns {boolean}
 */
// deno-lint-ignore no-explicit-any
export function hasKey<T>(key: keyof any, obj: T): boolean {
  return key in obj;
}
