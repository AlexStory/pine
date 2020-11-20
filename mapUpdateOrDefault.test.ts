import { assertEquals } from "./deps.ts";
import { mapUpdateOrDefault } from "./mod.ts";

Deno.test("mapUpdateOrDefault works", () => {
  const map = new Map();
  const withDefault = mapUpdateOrDefault("x", 1, (x) => x + 1, map);
  assertEquals(withDefault.get("x"), 1);
  const withUpdate = mapUpdateOrDefault("x", 1, (x) => x + 1, withDefault);
  assertEquals(withUpdate.get("x"), 2);
});
