import { assertEquals } from "../deps.ts";
import { max } from "../mod.ts";

Deno.test("max works", () => {
  assertEquals(10, max(0, 10));
  assertEquals(5, max(-100, 5));
});
