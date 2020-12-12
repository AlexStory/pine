import { assertEquals } from "../deps.ts";
import { fold } from "../mod.ts";

Deno.test("fold works", () => {
  const nums = [1, 2, 3];
  const add = (x: number, y: number) => x + y;
  const actual = fold(add, 0, nums);
  const expected = 6;
  assertEquals(actual, expected);
});
