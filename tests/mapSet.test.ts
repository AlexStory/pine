import { assert } from "../deps.ts";
import { mapSet } from "../mod.ts";
import { mapSet as mapSetC } from "../mod.curried.ts";

Deno.test("mapSet works", () => {
  const map = new Map();
  const withX = mapSet("x", 1, map);
  assert(withX.has("x"));
});

Deno.test("mapSet does not mutate", () => {
  const map = new Map();
  const _withX = mapSet("x", 1, map);
  assert(!map.has("x"));
});

Deno.test("mapSet works curried", () => {
  const map = new Map();
  const setX = mapSetC("x");

  const actual = setX(4, map);
  assert(actual.has("x"));
});
