import { assertEquals } from "../deps.ts";
import { add } from "../mod.ts";
import { add as addC } from "../mod.curried.ts";

Deno.test("add works", () => {
  assertEquals(5, add(2, 3));
});

Deno.test("add works curried", () => {
  const addOne = addC(1);
  const actual: number = addOne(2);
  const expected = 3;
  assertEquals(actual, expected);
});
