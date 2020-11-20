import { assertEquals } from "./deps.ts";
import { chunkEvery } from "./mod.ts";

Deno.test("chunkEvery works", () => {
  const nums = [1, 1, 2, 2];
  const expected = [[1, 1], [2, 2]];
  const actual = chunkEvery(2, nums);
  assertEquals(actual, expected);
});

Deno.test("chunkEvery leaves of unfinished chunks", () => {
  const nums = [1, 1, 2, 2, 3];
  const expected = [[1, 1], [2, 2]];
  const actual = chunkEvery(2, nums);
  assertEquals(actual, expected);
});
