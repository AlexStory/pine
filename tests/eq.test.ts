import { assert } from "../deps.ts";
import { eq } from "../mod.ts";
import { eq as eqC } from "../mod.curried.ts";

Deno.test("eq works", () => {
  const actual = eq(2, 2);
  assert(actual);

  const actualString = eq("apple", "apple");
  assert(actualString);
});

Deno.test("eq works curried", () => {
  const is2 = eqC(2);
  const actual = is2(4);
  assert(!actual);
});
