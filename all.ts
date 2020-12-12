import { contains, map } from "./mod.ts";

/**
 * Returns wether all items in a `list` satisfy the given function
 * @param {(T) => boolean} pred 
 * @param {T[]} list 
 * @returns {boolean} wether all items satisfy the predicate
 */
export function all<T>(pred: (item: T) => boolean, list: T[]): boolean {
    const results = map(pred, list)
    return !contains(false, results);
}