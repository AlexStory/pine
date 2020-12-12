import { assertEquals } from "../deps.ts";
import { clamp } from "../mod.ts";

Deno.test("Clamps a value below min", () => {
  assertEquals(0, clamp(0, 10, -5));
});

Deno.test("Clamps a value above max", () => {
  assertEquals(10, clamp(0, 10, 100));
});

Deno.test("Clamp does not alter value in range", () => {
  assertEquals(8, clamp(0, 10, 8));
});
