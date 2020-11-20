import { length } from "./mod.ts"

export function reverse<T>(list: T[]): T[] {
    const results = [];
    for(let i = length(list); i > 0; i--) {
        results.push(list[i-1]);
    }
    return results;
}