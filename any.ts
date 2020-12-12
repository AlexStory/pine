import { contains, map } from "./mod.ts";

/**
 * Returns wether any item in the `list` satisfies the function
 * @param {(T) => boolean} pred 
 * @param {T[]} list
 * @returns {boolean} 
 */
export function any<T>(pred: (item: T) => boolean, list: T[]): boolean {
    const results = map(pred, list);
    return contains(true, results);
}