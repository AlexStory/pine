import { assertEquals, assertThrows } from "../deps.ts";
import { repeat } from "../mod.ts";
import { repeat as repeatC } from "../mod.curried.ts";

Deno.test("repeat works", () => {
  assertEquals(repeat(3, 1), [1, 1, 1]);
});

Deno.test("repeat once works", () => {
  assertEquals(repeat(1, 3), [3]);
});

Deno.test("repeating zero time is empty", () => {
  assertEquals(repeat(0, "apple"), []);
});

Deno.test("repeat negative times throws", () => {
  assertThrows(() => repeat(-1, 3));
});

Deno.test("repeat works curried", () => {
  const threeTimes = repeatC(3);
  const actual = threeTimes(1);
  const expected = [1, 1, 1];

  assertEquals(actual, expected);
});