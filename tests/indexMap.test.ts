import { assertEquals } from "../deps.ts";
import { indexMap } from "../mod.ts";
import { indexMap as indexMapC } from "../mod.curried.ts";

const add = (x: number, y: number) => x + y;

Deno.test("indexMap works", () => {
  const numbers = [0, 0, 0];
  const actual = indexMap(add, numbers);
  const expected = [0, 1, 2];
  assertEquals(actual, expected);
});

Deno.test("indexMap works curried", () => {
  const numbers = [0, 0, 0];
  const addIndex = indexMapC(add);
  const actual = addIndex(numbers);
  const expected = [0, 1, 2];
  assertEquals(actual, expected);
});
