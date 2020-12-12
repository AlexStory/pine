import { assertEquals } from "../deps.ts";
import { first } from "../mod.ts";

Deno.test("first works", () => {
  const nums = [1, 2, 3, 4, 5];
  const actual = first(nums);
  const expected = [1, 2, 3, 4];
  assertEquals(actual, expected);
});
