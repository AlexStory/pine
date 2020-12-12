import { assertEquals } from "../deps.ts";
import { add, reduce } from "../mod.ts";

Deno.test("reduce works", () => {
  assertEquals(6, reduce(add, [1, 2, 3]));
});
