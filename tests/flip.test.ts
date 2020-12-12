import { assertEquals } from "../deps.ts";
import { flip } from "../flip.ts";

Deno.test("flip works", function () {
  const x = 1;
  const y = 2;

  const arrayify = function <T>(x: T, y: T): T[] {
    return [x, y];
  };

  const flipped = flip(arrayify);
  const actual = flipped(1, 2);
  const expected = [2, 1];
  assertEquals(actual, expected);
});
