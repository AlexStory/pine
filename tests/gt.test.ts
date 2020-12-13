import { assert } from "../deps.ts";
import { gt } from "../mod.ts";
import { gt as gtC } from "../mod.curried.ts";

Deno.test("gt works", () => {
  const actual = gt(1, 6);
  assert(actual);

  const falsey = gt(5, 1);
  assert(!falsey);
});

Deno.test("gt works curried", () => {
  const over2 = gtC(2);
  assert(over2(6));
});
