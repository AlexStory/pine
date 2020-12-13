import { assert } from "../deps.ts";
import { all } from "../mod.ts";
import { all as allC } from "../mod.curried.ts";

Deno.test("all works", () => {
  const nums = [2, 3, 4];
  const actual = all((x) => x > 1, nums);
  assert(actual);

  const falsey = all((x) => x % 2 === 0, nums);
  assert(!falsey);
});

Deno.test("all works curried", () => {
  const nums = [1, 2, 3];
  const overZero = (x: number) => x > 0;
  const allOverZero = allC(overZero);
  const actual = allOverZero(nums);

  assert(actual);
});
