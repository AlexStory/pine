import { assertEquals } from "../deps.ts";
import { filter, isEven } from "../mod.ts";

Deno.test("filter works", () => {
  const nums = [1, 2, 3, 4, 5];
  const expected = [2, 4];
  assertEquals(filter(isEven, nums), expected);
});
