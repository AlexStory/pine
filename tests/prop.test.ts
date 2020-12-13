import { assertEquals } from "../deps.ts";
import { prop } from "../mod.ts";
import { prop as propC } from "../mod.curried.ts";

Deno.test("prop works", () => {
  const ob = { x: 1 };
  const actual = prop("x", ob);
  const expected = 1;
  assertEquals(actual, expected);
});

Deno.test("prop works curried", () => {
  const ob = { x: 1 };
  const getX = propC("x");
  const actual = getX(ob);
  const expected = 1;

  assertEquals(actual, expected);
});
