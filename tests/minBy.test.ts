import { assertEquals } from "../deps.ts";
import { minBy } from "../mod.ts";
import { minBy as minByC } from "../mod.curried.ts";

Deno.test("minBy works", () => {
  const x = 4;
  const y = 6;
  const expected = 4;
  const actual = minBy((x) => x, x, y);
  assertEquals(actual, expected);
});

Deno.test("minBy works curried", () => {
  const length = (x: string) => x.length;
  const minByLength = minByC(length);
  const actual = minByLength("apple", "banana");
  const expected = "apple";

  assertEquals(actual, expected);
});
