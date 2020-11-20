import { length, min, range } from "./mod.ts";

export function zip<T, U>(first: T[], second: U[]): [T, U][] {
    const len = min(length(first), length(second))
    for (n of range(0, len)
}