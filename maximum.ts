import { max, reduce } from "./mod.ts";

/**
 * Returns the largest number in a list
 * @param {number[]}list
 * @returns {number} 
 */
export function maximum(list: number[]): number {
  return reduce(max, list);
}
