import { assertEquals, assertThrows } from "../deps.ts";
import { mapGet } from "../mod.ts";
import { mapGet as mapGetC } from "../mod.curried.ts";

Deno.test("mapGet works", () => {
  const map = new Map();
  map.set("x", 3);
  const actual = mapGet("x", map);
  const expected = 3;
  assertEquals(actual, expected);
});

Deno.test("mapGet throws error on missing value", () => {
  const map = new Map();
  assertThrows(() => mapGet("x", map));
});

Deno.test("mapGet works curried", () => {
  const map = new Map();
  map.set("apples", 5);
  const getApples = mapGetC("apples");
  const actual = getApples(map);
  const expected = 5;

  assertEquals(actual, expected);
});
