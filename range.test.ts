import { assertEquals, assertThrows } from "./deps.ts";
import { range } from "./mod.ts";

Deno.test("range works", () => {
  const expected = [1, 2, 3];
  assertEquals(range(1, 3), expected);
});
