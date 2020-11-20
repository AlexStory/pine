import { assertEquals } from "./deps.ts";
import { dec } from "./mod.ts";

Deno.test("dec works", () => {
  assertEquals(1, dec(2));
  assertEquals(0, dec(1));
  assertEquals(-1, dec(0));
});
