import { eq, filter, length } from "./mod.ts";
/**
 * Returns wether the given `list` contains `item`
 * @param {T} item 
 * @param {T[]} list 
 * @returns {boolean}
 */
export function contains<T>(item: T, list: T[]) : boolean {
    const items = filter(x => eq(x, item), list)
    return length(items) > 0
}