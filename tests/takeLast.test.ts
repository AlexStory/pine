import { assertEquals } from "../deps.ts";
import { takeLast } from "../mod.ts";
import { takeLast as takeLastC } from "../mod.curried.ts";

Deno.test("takeLast works", () => {
  const nums = [1, 2, 3, 4, 5];
  assertEquals(takeLast(2, nums), [4, 5]);
});

Deno.test("takeLast works curried", () => {
  const nums = [1, 2, 3, 4, 5];
  const lastTwo = takeLastC(2);
  const actual = lastTwo(nums);
  const expected = [4, 5];

  assertEquals(actual, expected);
});