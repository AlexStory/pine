import { assertEquals } from "../deps.ts";
import { not } from "../mod.ts";

Deno.test("not works", () => {
  assertEquals(not(true), false);
  assertEquals(not(false), true);
});
