import { add, reduce } from "./mod.ts";

/**
 * Returns the sum of all numbers in the `list`
 * @param {number []} list 
 * @returns {number}
 */
export function sum(list: number []): number {
    return reduce(add, list);
}