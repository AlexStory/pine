import { isEven, not } from "./mod.ts";

export function isOdd(n: number): boolean {
  return not(isEven(n));
}
