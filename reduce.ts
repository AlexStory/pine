import { head, tail, fold} from "./mod.ts";

export function reduce<T>(fn: (x: T, y: T) => T, list: T[]): T {
  return fold(fn, head(list), tail(list));
}
