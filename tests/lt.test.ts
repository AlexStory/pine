import { assert } from "../deps.ts";
import { lt } from "../mod.ts";
import { lt as ltC } from "../mod.curried.ts";

Deno.test("lt works", () => {
  const actual = lt(5, 1);
  assert(actual);

  const falsey = lt(1, 100);
  assert(!falsey);
});

Deno.test("lt works curried", () => {
  const under10 = ltC(10);
  const actual = under10(4);
  assert(actual);
});
