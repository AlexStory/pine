import { assertEquals } from "../deps.ts";
import { mapUpdateOrDefault } from "../mod.ts";
import { mapUpdateOrDefault as mapUpdateOrDefaultC } from "../mod.curried.ts";

Deno.test("mapUpdateOrDefault works", () => {
  const map = new Map();
  const withDefault = mapUpdateOrDefault("x", 1, (x) => x + 1, map);
  assertEquals(withDefault.get("x"), 1);
  const withUpdate = mapUpdateOrDefault("x", 1, (x) => x + 1, withDefault);
  assertEquals(withUpdate.get("x"), 2);
});

Deno.test("mapUpdateOrDefault works curried", () => {
  const addOne = (x: number) => x + 1;
  const map = new Map();
  const incOrOne = mapUpdateOrDefaultC("x", 1, addOne);
  const newMap = incOrOne(map);
  const actual = newMap.get("x");
  const expected = 1;

  assertEquals(actual, expected);
});
