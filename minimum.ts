import { min, reduce } from "./mod.ts";

export function minimum(list: number[]): number {
  return reduce(min, list);
}
