import { max, reduce } from "./mod.ts";

export function maximum(list: number[]): number {
  return reduce(max, list);
}
