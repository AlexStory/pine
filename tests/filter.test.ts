import { assertEquals } from "../deps.ts";
import { filter } from "../mod.ts";
import { filter as filterC } from "../mod.curried.ts";

const isEven = (x: number) => x % 2 === 0;

Deno.test("filter works", () => {
  const nums = [1, 2, 3, 4, 5];
  const expected = [2, 4];
  assertEquals(filter(isEven, nums), expected);
});

Deno.test("filter works curried", () => {
  const list = [1, 2, 3, 4, 5];
  const evens = filterC(isEven);
  const actual = evens(list);
  const expected = [2, 4];
  assertEquals(actual, expected);
});
