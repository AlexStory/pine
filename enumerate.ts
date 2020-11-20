import { indexMap } from "./mod.ts";

export function enumerate<T>(list: T[]): [number, T][] {
  return indexMap((i, item) => [i, item], list);
}
