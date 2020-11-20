import { assert } from "./deps.ts";
import { mapHas } from "./mod.ts";

Deno.test("mapHas works", () => {
  const map = new Map();
  map.set("x", 4);
  assert(mapHas("x", map));
  assert(!mapHas("y", map));
});
