import { assert } from "../deps.ts";
import { lte } from "../mod.ts";
import { lte as lteC } from "../mod.curried.ts";

Deno.test("lte works", () => {
  assert(lte(5, 4));
  assert(lte(5, 5));
  assert(!lte(4, 5));
});

Deno.test("lte works curried", () => {
  const lessThen20 = lteC(20);
  const actual = lessThen20(14);
  assert(actual);
});
