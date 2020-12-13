import { assertEquals } from "../deps.ts";
import { max } from "../mod.ts";
import { max as maxC } from "../mod.curried.ts";

Deno.test("max works", () => {
  assertEquals(10, max(0, 10));
  assertEquals(5, max(-100, 5));
});

Deno.test("max works curried", () => {
  const maxWith100 = maxC(100);
  const actual = maxWith100(44);
  const expected = 100;

  assertEquals(actual, expected);
});
