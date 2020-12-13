import { assert } from "../deps.ts";
import { gte } from "../mod.ts";
import { gte as gteC } from "../mod.curried.ts";

Deno.test("gte works", () => {
  assert(gte(4, 5));
  assert(gte(4, 4));
  assert(!gte(5, 4));
});

Deno.test("gte works curried", () => {
  const over5 = gteC(5);
  assert(over5(6));
  assert(!over5(2));
});
