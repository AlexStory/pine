import { assertEquals } from "../deps.ts";
import { min } from "../mod.ts";
import { min as minC } from "../mod.curried.ts";

Deno.test("min works", () => {
  assertEquals(2, min(2, 4));
  assertEquals(-6, min(-6, 3));
});

Deno.test("min works curried", () => {
  const minWith3 = minC(3);
  const actual = minWith3(4);
  const expected = 3;

  assertEquals(actual, expected);
});
