import { assertEquals } from "../deps.ts";
import { map } from "../mod.ts";

Deno.test("map works", () => {
  const nums = [1, 2, 3];
  assertEquals([2, 3, 4], map((x) => x + 1, nums));
});
