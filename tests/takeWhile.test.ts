import { assertEquals } from "../deps.ts";
import { takeWhile } from "../mod.ts";
import { takeWhile as takeWhileC } from "../mod.curried.ts";

Deno.test("takeWhile works", () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = [1, 2];
  assertEquals(takeWhile((x) => x < 3, numbers), expected);
});

Deno.test("takeWhile works curried", () => {
  const numbers = [1, 2, 3, 4, 5];
  const whileUnder4 = takeWhileC((x: number) => x < 4)
  const actual = whileUnder4(numbers);
  const expected = [1, 2, 3]

  assertEquals(actual, expected);
});