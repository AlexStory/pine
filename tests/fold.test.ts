import { assertEquals } from "../deps.ts";
import { fold } from "../mod.ts";
import { fold as foldC } from "../mod.curried.ts";

Deno.test("fold works", () => {
  const nums = [1, 2, 3];
  const add = (x: number, y: number) => x + y;
  const actual = fold(add, 0, nums);
  const expected = 6;
  assertEquals(actual, expected);
});

Deno.test("fold works curried", () => {
  const nums = [1, 2, 3];
  const add = (x: number, y: number) => x + y;
  const sum = foldC(add, 0);
  const actual = sum(nums);
  const expected = 6;
  assertEquals(actual, expected);
});
