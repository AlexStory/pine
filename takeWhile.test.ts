import { assertEquals } from "./deps.ts";
import { takeWhile } from "./mod.ts";

Deno.test("takeWhile works", () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = [1, 2];
  assertEquals(takeWhile((x) => x < 3, numbers), expected);
});
