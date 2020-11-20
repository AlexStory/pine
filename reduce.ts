import { fold, head, tail } from "./mod.ts";

/**
 * Shorthand to call fold with the first item of the array as
 * the initializer and the rest of the array as the argument
 * @param {(T, T) => T} fn 
 * @param {T[]}list
 * @returns {T} 
 */
export function reduce<T>(fn: (x: T, y: T) => T, list: T[]): T {
  return fold(fn, head(list), tail(list));
}
