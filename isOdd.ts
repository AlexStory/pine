import { isEven, not } from "./mod.ts";

/**
 * Returns wether a given number is odd
 * @param {number} n
 * @returns {boolean} 
 */
export function isOdd(n: number): boolean {
  return not(isEven(n));
}
