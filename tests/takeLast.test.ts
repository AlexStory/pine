import { assertEquals } from "../deps.ts";
import { takeLast } from "../mod.ts";

Deno.test("takeLast works", () => {
  const nums = [1, 2, 3, 4, 5];
  assertEquals(takeLast(2, nums), [4, 5]);
});
