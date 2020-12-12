import { assertEquals } from "../deps.ts";
import { add, indexMap } from "../mod.ts";

Deno.test("indexMap works", () => {
  const numbers = [0, 0, 0];
  assertEquals(indexMap(add, numbers), [0, 1, 2]);
});
