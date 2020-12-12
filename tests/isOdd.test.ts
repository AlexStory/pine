import { assert } from "../deps.ts";
import { isOdd } from "../mod.ts";

Deno.test("isOdd works", () => {
  assert(isOdd(3));
  assert(!isOdd(2));
});
