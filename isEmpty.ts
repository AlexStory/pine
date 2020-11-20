import { length } from "./mod.ts";

/**
 * Returns wether a list is empty
 * @param {T[]} list
 * @returns {boolean}
 */
export function isEmpty<T>(list: T[]): boolean {
    return length(list) == 0
}