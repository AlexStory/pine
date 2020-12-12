import { assertEquals } from "../deps.ts";
import { enumerate } from "../mod.ts";

Deno.test("enumerate works", () => {
  const nums = [1, 2, 3];
  const expected = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];

  assertEquals(enumerate(nums), expected);
});
