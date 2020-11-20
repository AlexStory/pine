import { last, length } from "./mod.ts";

export function scan<T, U>(fn: (acc: U, x: T) => U, init: U, list: T[]): U[] {
  const results = [init];
  for (let i = 0; i < length(list); i++) {
    const currentResult = last(results);
    const newItem = fn(currentResult, list[i]);
    results.push(newItem);
  }
  return results;
}
