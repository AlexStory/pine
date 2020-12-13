import { assertEquals } from "../deps.ts";
import { maxBy } from "../mod.ts";
import { maxBy as maxByC } from "../mod.curried.ts";

Deno.test("maxBy works", () => {
  const first = [1, 2, 3];
  const second = [2, 3, 4];
  const actual = maxBy((x) => x[0], first, second);

  assertEquals(actual, second);
});

Deno.test("maxBy works curried", () => {
  const length = (x: string) => x.length;
  const maxByLength = maxByC(length);
  const actual = maxByLength("apple", "banana");
  const expected = "banana";

  assertEquals(actual, expected);
});
