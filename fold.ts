import { length } from "./mod.ts";

export function fold<T, U>(fn: (acc: U, x: T) => U, acc: U, list: T[]): U {
  let result = acc;
  for (let i = 0; i < length(list); i++) {
    result = fn(result, list[i]);
  }
  return result;
}
