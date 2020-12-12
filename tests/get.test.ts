import { assert } from "../deps.ts";
import { gte } from "../mod.ts";

Deno.test("gte works", () => {
  assert(gte(4, 5));
  assert(gte(4, 4));
  assert(!gte(5, 4));
});
