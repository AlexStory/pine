import { assert } from "../deps.ts";
import { mapHas } from "../mod.ts";
import { mapHas as mapHasC } from "../mod.curried.ts";

Deno.test("mapHas works", () => {
  const map = new Map();
  map.set("x", 4);
  assert(mapHas("x", map));
  assert(!mapHas("y", map));
});

Deno.test("mapHas works curried", () => {
  const map = new Map();
  map.set("x", 4);
  const hasX = mapHasC("x");
  const actual = hasX(map);

  assert(actual);
});
