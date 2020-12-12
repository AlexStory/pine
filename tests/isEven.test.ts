import { assert } from "../deps.ts";
import { isEven } from "../mod.ts";

Deno.test("isEven works", () => {
  assert(isEven(2));
  assert(!isEven(3));
});
