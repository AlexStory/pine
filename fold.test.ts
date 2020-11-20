import { assertEquals } from "./deps.ts";
import { add, fold } from "./mod.ts";

Deno.test("fold works", () => {
  const nums = [1, 2, 3];
  assertEquals(6, fold(add, 0, nums));
});
