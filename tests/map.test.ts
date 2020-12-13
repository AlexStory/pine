import { assertEquals } from "../deps.ts";
import { map } from "../mod.ts";
import { map as mapC } from "../mod.curried.ts";

Deno.test("map works", () => {
  const nums = [1, 2, 3];
  const actual = map((x) => x + 1, nums);
  const expected = [2, 3, 4];
  assertEquals(actual, expected);
});

Deno.test("map works curried", () => {
  const list = [1, 2, 3];
  const double = (x: number) => x * 2;
  const doubleAll = mapC(double);
  const actual = doubleAll(list);
  const expected = [2, 4, 6];
  assertEquals(actual, expected);
});
