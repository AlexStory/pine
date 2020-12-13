import { assertEquals } from "../deps.ts";
import { chunkEvery } from "../mod.ts";
import { chunkEvery as chunkEveryC } from "../mod.curried.ts";
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

Deno.test("chunkEvery works curried", () => {
  const list = [1, 1, 3, 3];
  const pair = chunkEveryC(2);
  const actual = pair(list);
  const expected = [[1, 1], [3, 3]];
  assertEquals(actual, expected);
});
