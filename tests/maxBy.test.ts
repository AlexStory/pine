import { assertEquals } from "../deps.ts";
import { maxBy } from "../mod.ts";

Deno.test("maxBy works", () => {
  const first = [1, 2, 3];
  const second = [2, 3, 4];
  const actual = maxBy((x) => x[0], first, second);
  assertEquals(actual, second);
});
