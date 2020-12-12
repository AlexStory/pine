import { assertEquals } from "../deps.ts";
import { sumBy } from "../mod.ts";

Deno.test("sumBy works", () => {
  const first = { x: 1 };
  const second = { x: 2 };
  const third = { x: 3 };
  const list = [first, second, third];
  const actual = sumBy((o) => o.x, list);
  const expected = 6;
  assertEquals(actual, expected);
});
