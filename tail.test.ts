import { assertEquals } from "./deps.ts";
import { tail } from "./mod.ts";

Deno.test("tail works", () => {
  assertEquals([2, 3], tail([1, 2, 3]));
});

Deno.test("tail of an empty list is empty", () => {
  assertEquals([], tail([]));
});

Deno.test("tail of a single item list is empty", () => {
  assertEquals([], tail([1]));
});
