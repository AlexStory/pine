import { assertEquals } from "../deps.ts";
import { clamp } from "../mod.ts";
import { clamp as clampC } from "../mod.curried.ts";

Deno.test("Clamps a value below min", () => {
  assertEquals(0, clamp(0, 10, -5));
});

Deno.test("Clamps a value above max", () => {
  assertEquals(10, clamp(0, 10, 100));
});

Deno.test("Clamp does not alter value in range", () => {
  assertEquals(8, clamp(0, 10, 8));
});

Deno.test("clamp works curried", () => {
  const rate = clampC(1, 10);
  const actual = rate(33);
  const expected = 10;

  assertEquals(actual, expected);
});
