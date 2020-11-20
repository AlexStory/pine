import { min, reduce } from "./mod.ts";

/**
 * Returns the smallest number in an array
 * @param {number[]}list
 * @returns number 
 */
export function minimum(list: number[]): number {
  return reduce(min, list);
}
