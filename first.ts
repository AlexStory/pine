import { length } from "./mod.ts";

export function first<T>(list: T[]): T[] {
  const results = [];
  for (let i = 0; i < length(list) - 1; i++) {
    results.push(list[i]);
  }

  return results;
}
