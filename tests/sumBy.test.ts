import { assertEquals } from "../deps.ts";
import { sumBy } from "../mod.ts";
import { sumBy as sumByC } from "../mod.curried.ts";

Deno.test("sumBy works", () => {
  const first = { x: 1 };
  const second = { x: 2 };
  const third = { x: 3 };
  const list = [first, second, third];
  const actual = sumBy((o) => o.x, list);
  const expected = 6;
  assertEquals(actual, expected);
});

Deno.test("sumBy works curried", () => {
  const words = ["apple", "banana", "grapefruit"];
  const length = (x: string) => x.length;
  const getTotalLength = sumByC(length);
  const actual = getTotalLength(words);
  const expected = 21;

  assertEquals(actual, expected);
});