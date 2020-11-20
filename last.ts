import { length } from "./mod.ts";

export function last<T>(list: T[]): T {
  return list[length(list) - 1];
}
