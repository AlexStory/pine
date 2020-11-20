import { enumerate, length } from "./mod.ts";

export function tail<T>(list: T[]): T[] {
  const results = [];

  const enumerated = enumerate(list);

  for (let i = 1; i < length(list); i++) {
    results.push(list[i]);
  }
  return results;
}
