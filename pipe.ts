import { reduce } from "./mod.ts";

/**
 * Pipes together the supplied functions
 * @param {Function[]} fns
 * @returns {Function} 
 */
// deno-lint-ignore no-explicit-any
export function pipe(...fns: Array<(x: any) => any>): ((x: any) => any) {
    return reduce((prev, next) => val => next(prev(val)) , fns)
}
