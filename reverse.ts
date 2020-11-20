import { length } from "./mod.ts";

export function reverse<T>(list: T[]): T[] {
  const results = [];

  for (const item of list) {
    results.unshift(item);
  }

  return results;
}
