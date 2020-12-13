import { assertEquals, assertThrows } from "../deps.ts";
import { range } from "../mod.ts";
import { range as rangeC } from "../mod.curried.ts";

Deno.test("range works", () => {
  const expected = [1, 2, 3];
  assertEquals(range(1, 3), expected);
});

Deno.test("range with single number", () => {
  assertEquals(range(1, 1), [1]);
});

Deno.test("range with larger start than stop throws", () => {
  assertThrows(() => range(4, 3));
});

Deno.test("range works curried", () => {
  const from4 = rangeC(4);
  const actual = from4(6);
  const expected = [4, 5, 6];

  assertEquals(actual, expected);
});
