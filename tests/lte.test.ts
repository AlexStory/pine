import { assert } from "../deps.ts";
import { lte } from "../mod.ts";

Deno.test("lte works", () => {
  assert(lte(5, 4));
  assert(lte(5, 5));
  assert(!lte(4, 5));
});
