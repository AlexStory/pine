import { assertEquals, assertThrows } from "./deps.ts";
import { mapGet } from "./mod.ts";

Deno.test("mapGet works", () => {
  const map = new Map();
  map.set("x", 3);
  assertEquals(mapGet("x", map), 3);
});

Deno.test("mapGet throws error on missing value", () => {
  const map = new Map();
  assertThrows(() => mapGet("x", map));
});
