import { assertEquals } from "../deps.ts";
import { reduce } from "../mod.ts";
import { reduce as reduceC } from "../mod.curried.ts";

const add = (x: number, y: number) => x + y;

Deno.test("reduce works", () => {
  assertEquals(6, reduce(add, [1, 2, 3]));
});

Deno.test("reduce works curried", () => {
  const list = [1, 2, 3];
  const sum = reduceC(add);
  const actual = sum(list);
  const expected = 6;

  assertEquals(actual, expected);
});
