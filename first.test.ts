import { assertEquals } from "./deps.ts";
import { first } from "./mod.ts";

Deno.test("first works", () => {
  const nums = [1, 2, 3, 4, 5];
  assertEquals([1, 2, 3, 4], first(nums));
});
