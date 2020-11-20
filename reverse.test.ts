import { assertEquals } from "./deps.ts";
import { reverse } from "./reverse.ts";

Deno.test("reverse works", () => {
  const nums = [1, 2, 3];
  assertEquals([3, 2, 1], reverse(nums));
});
